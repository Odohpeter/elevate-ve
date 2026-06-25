from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
import ssl
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    name: str
    email: str
    topic: str
    message: str
    company: Optional[str] = ""
    phone: Optional[str] = ""

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/contact")
async def contact(data: ContactForm):
    try:
        html = f"""
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1a1a1a;border-bottom:2px solid #e5e5e5;padding-bottom:12px;">New Inquiry — Pejul Website</h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr><td style="padding:8px 0;color:#666;width:120px;"><strong>Name</strong></td><td style="padding:8px 0;">{data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:{data.email}">{data.email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Company</strong></td><td style="padding:8px 0;">{data.company or "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Phone</strong></td><td style="padding:8px 0;">{data.phone or "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#666;"><strong>Topic</strong></td><td style="padding:8px 0;">{data.topic}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#f9f9f9;border-radius:8px;">
            <strong style="color:#1a1a1a;">Message</strong>
            <p style="margin-top:8px;color:#333;line-height:1.6;">{data.message.replace(chr(10), "<br>")}</p>
          </div>
        </div>
        """
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"New inquiry: {data.topic} — {data.name}"
        msg["From"] = os.environ.get("SMTP_FROM", "")
        msg["To"] = os.environ.get("SMTP_TO", "")
        msg["Reply-To"] = data.email
        msg.attach(MIMEText(html, "html"))

        ctx = ssl.create_default_context()
        with smtplib.SMTP_SSL(
            os.environ.get("SMTP_HOST", "smtp.titan.email"),
            int(os.environ.get("SMTP_PORT", "465")),
            context=ctx
        ) as server:
            server.login(os.environ.get("SMTP_USER", ""), os.environ.get("SMTP_PASS", ""))
            server.sendmail(
                os.environ.get("SMTP_FROM", ""),
                os.environ.get("SMTP_TO", ""),
                msg.as_string()
            )
        return {"success": True}
    except Exception as e:
        logger.error(f"Contact form error: {e}")
        return {"success": False, "message": "Failed to send — please try again."}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()