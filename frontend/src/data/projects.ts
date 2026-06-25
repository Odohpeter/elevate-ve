import pf1 from "@/assets/pf-1.jpg";
import pf2 from "@/assets/pf-2.jpg";
import pf3 from "@/assets/pf-3.jpg";
import pf4 from "@/assets/pf-4.jpg";
import pf5 from "@/assets/pf-5.jpg";
import pf6 from "@/assets/pf-6.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

import billsproCover from "@/assets/billspro/cover.jpg";
import billsproHome from "@/assets/billspro/home.png";
import billsproBills from "@/assets/billspro/bills.png";
import billsproTx from "@/assets/billspro/transactions.png";
import billsproCard from "@/assets/billspro/card.png";
import billsproNaira from "@/assets/billspro/naira.png";
import billsproCrypto from "@/assets/billspro/crypto.png";

import earlybazeCover from "@/assets/earlybaze/cover.jpg";
import ebHome from "@/assets/earlybaze/home.png";
import ebAssets from "@/assets/earlybaze/assets.png";
import ebBitcoin from "@/assets/earlybaze/bitcoin.png";
import ebReceive from "@/assets/earlybaze/receive.png";
import ebSwap from "@/assets/earlybaze/swap.png";
import ebTxSuccess from "@/assets/earlybaze/tx-success.png";
import ebWithdrawal from "@/assets/earlybaze/withdrawal.png";
import ebTransactions from "@/assets/earlybaze/transactions.png";
import ebNairaHome from "@/assets/earlybaze/naira-home.png";

import colalaCover from "@/assets/colala/cover.jpg";
import colalaHome from "@/assets/colala/home.png";
import colalaStore from "@/assets/colala/store.png";
import colalaFeed from "@/assets/colala/feed.png";
import colalaServices from "@/assets/colala/services.png";
import colalaChat from "@/assets/colala/chat.png";
import colalaOrders from "@/assets/colala/orders.png";
import colalaWallet from "@/assets/colala/wallet.png";
import colalaLeaderboard from "@/assets/colala/leaderboard.png";
import colalaSubscribe from "@/assets/colala/subscribe.png";

import kokoletCover from "@/assets/kokolet/cover.jpg";
import kokoletHome from "@/assets/kokolet/home.png";
import kokoletShop from "@/assets/kokolet/shop.png";
import kokoletProduct from "@/assets/kokolet/product.png";
import kokoletCart from "@/assets/kokolet/cart.png";
import kokoletAccount from "@/assets/kokolet/account.png";
import kokoletSettings from "@/assets/kokolet/settings.png";
import kokoletLoyalty from "@/assets/kokolet/loyalty.png";
import kokoletDrop from "@/assets/kokolet/drop.png";
import kokoletHelp from "@/assets/kokolet/help.png";

import rhinoxCover from "@/assets/rhinoxpay/cover.jpg";
import rhinoxHome from "@/assets/rhinoxpay/home.png";
import rhinoxSend from "@/assets/rhinoxpay/send.png";
import rhinoxFiat from "@/assets/rhinoxpay/fiat-wallet.png";
import rhinoxCrypto from "@/assets/rhinoxpay/crypto-wallet.png";
import rhinoxBills from "@/assets/rhinoxpay/bills.png";
import rhinoxP2P from "@/assets/rhinoxpay/p2p.png";
import rhinoxAds from "@/assets/rhinoxpay/ads.png";
import rhinoxHistory from "@/assets/rhinoxpay/history.png";
import rhinoxReceipt from "@/assets/rhinoxpay/receipt.png";

import gpCover from "@/assets/gympaddy/cover.jpg";
import gpFeed from "@/assets/gympaddy/feed.png";
import gpPost from "@/assets/gympaddy/post.png";
import gpBoost from "@/assets/gympaddy/boost.png";
import gpWallet from "@/assets/gympaddy/wallet.png";
import gpMarket from "@/assets/gympaddy/market.png";
import gpCall from "@/assets/gympaddy/call.png";
import gpProfile from "@/assets/gympaddy/profile.png";
import gpLive from "@/assets/gympaddy/live.png";
import gpChat from "@/assets/gympaddy/chat.png";

import above20 from "@/assets/above/above-20.png";
import above21 from "@/assets/above/above-21.png";
import above22 from "@/assets/above/above-22.png";
import above23 from "@/assets/above/above-23.png";
import above24 from "@/assets/above/above-24.png";
import above25 from "@/assets/above/above-25.png";
import above26 from "@/assets/above/above-26.png";
import above27 from "@/assets/above/above-27.png";

import kokoletPosCover from "@/assets/digitization/kokolet-pos-cover.jpg";
import kokoletPosCheckout from "@/assets/digitization/kokolet-pos-checkout.jpg";
import kokoletPosInventory from "@/assets/digitization/kokolet-pos-inventory.jpg";
import wcssErpCover from "@/assets/digitization/wcss-erp-cover.jpg";
import wcssErpProcurement from "@/assets/digitization/wcss-erp-procurement.jpg";
import wcssErpHr from "@/assets/digitization/wcss-erp-hr.jpg";
import mainserviceErpCover from "@/assets/digitization/mainservice-erp-cover.jpg";
import mainserviceErpWarehouse from "@/assets/digitization/mainservice-erp-warehouse.jpg";
import mainserviceErpCustoms from "@/assets/digitization/mainservice-erp-customs.jpg";
import _asset_0_abovelife from "@/assets/portfolio-assets/abovelife-fullpage.png";
import _asset_1_arctic from "@/assets/portfolio-assets/arctic-cover.jpg";
import _asset_2_arctic from "@/assets/portfolio-assets/arctic-fullpage.png";
import _asset_3_gfm from "@/assets/portfolio-assets/gfm-cover.jpg";
import _asset_4_gfm from "@/assets/portfolio-assets/gfm-fullpage.png";
import _asset_5_kokolet from "@/assets/portfolio-assets/kokolet-cover.jpg";
import _asset_6_kokolet from "@/assets/portfolio-assets/kokolet-fullpage.png";
import _asset_7_earlybaze from "@/assets/portfolio-assets/earlybaze-cover.jpg";
import _asset_8_earlybaze from "@/assets/portfolio-assets/earlybaze-fullpage.png";
import _asset_9_crystal from "@/assets/portfolio-assets/crystal-cover.jpg";
import _asset_10_crystal from "@/assets/portfolio-assets/crystal-fullpage.png";



export type Category = "Software" | "Digitization" | "Website";

export interface MobileShot {
  src: string;
  label: string;
  caption?: string;
}

export interface Project {
  id: string;
  category: Category;
  client: string;
  title: string;
  year: string;
  cover: string;
  shots: string[];
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { v: string; l: string }[];
  tech: string[];
  services?: string[];
  duration?: string;
  team?: string;
  website?: string;
  /** When set to "mobile", renders iPhone-framed gallery + store badges. */
  kind?: "mobile";
  mobileShots?: MobileShot[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  sellerAppStoreUrl?: string;
  sellerPlayStoreUrl?: string;
  features?: { title: string; body: string }[];
  /** Full-page screenshot URL — when set, gallery renders one auto-scrolling browser frame instead of multiple stacked frames. */
  fullpage?: string;
}

export const PROJECTS: Project[] = [
  {


    id: "colala-mall",
    category: "Software",
    client: "Colala Mall (Lagos)",
    title: "Colala Mall — a commission-free marketplace for buyers & sellers in Nigeria",
    year: "2025",
    cover: colalaCover,
    shots: [colalaHome, colalaFeed, colalaStore],
    kind: "mobile",
    mobileShots: [
      { src: colalaHome, label: "Buyer Home", caption: "Personalised home feed with categories, top-selling products and sponsored stores." },
      { src: colalaFeed, label: "Social Feed", caption: "An in-app social feed where sellers post products, videos and offers buyers can react to." },
      { src: colalaServices, label: "Services", caption: "Browse physical products and services side-by-side — from fashion designing to electronics." },
      { src: colalaStore, label: "Seller Store", caption: "Each seller gets a branded store with profile, ratings, products and a store builder." },
      { src: colalaChat, label: "Buyer ↔ Seller Chat", caption: "Direct, contextual chat between buyers and sellers — no middleman, no commission." },
      { src: colalaOrders, label: "Order Tracking", caption: "Track every order across placed, out-for-delivery, delivered and completed states." },
      { src: colalaWallet, label: "Shopping Wallet", caption: "An in-app Naira wallet with deposits, withdrawals and payment history." },
      { src: colalaLeaderboard, label: "Seller Leaderboard", caption: "Gamified seller rankings — daily, weekly, monthly and all-time podium." },
      { src: colalaSubscribe, label: "Subscription Plans", caption: "Monthly Ultra plans unlock the marketplace — zero per-transaction commission." },
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    sellerAppStoreUrl: "#",
    sellerPlayStoreUrl: "#",
    challenge: "A Lagos-based logistics firm watched their customers — importers from China and Turkey — struggle to actually sell what they shipped in. The big marketplaces felt impersonal, took heavy commissions, and gave sellers no way to talk to buyers. They wanted something Jumia-like in scale, but personal, conversational and commission-free.",
    solution: "We designed and built Colala Mall as a two-app marketplace ecosystem: a dedicated Buyer app and a dedicated Seller app, both on iOS and Android, plus a progressive web app where either side can log in and shop. The business model flips the standard marketplace: no per-sale commission, just a monthly subscription. Buyers and sellers chat directly, browse video-rich product feeds, run their own branded stores, and transact through an in-app Naira wallet.",
    outcome: "Colala Mall launched as a full marketplace across Android, iOS and PWA — separate buyer and seller experiences, a social feed, in-app chat, order tracking, wallets, seller leaderboards, and subscription billing — all under one bold crimson identity.",
    metrics: [
      { v: "0%", l: "Per-sale commission" },
      { v: "2 apps", l: "Buyer + Seller" },
      { v: "3", l: "iOS · Android · PWA" },
    ],
    tech: ["React Native", "Node.js", "TypeScript", "Postgres", "PWA", "Stripe / Paystack", "WebSockets"],
    services: [
      "Buyer mobile app (iOS & Android)",
      "Seller mobile app (iOS & Android)",
      "Progressive Web App",
      "In-app chat & social feed",
      "Subscription billing",
      "Wallet, orders & seller leaderboard",
    ],
    features: [
      { title: "Two-Sided Marketplace", body: "Separate Buyer and Seller apps on iOS and Android — each tuned to its audience instead of a one-size-fits-all UX." },
      { title: "Commission-Free, Subscription-Based", body: "Sellers pay a flat monthly plan to unlock the marketplace — no per-transaction cut on what they sell." },
      { title: "Direct Buyer ↔ Seller Chat", body: "Every product opens into a chat thread with the seller, with product context, pricing and order links built in." },
      { title: "Social Product Feed", body: "Sellers post products, videos and deals to an in-app feed buyers can like, comment on and share — turning the marketplace into a community." },
      { title: "Branded Seller Stores", body: "Each seller gets a profile, cover, category tags, ratings and a built-in store builder — products and services live side by side." },
      { title: "Orders, Wallets & Leaderboards", body: "Full order lifecycle, an in-app Naira shopping wallet, and a gamified seller leaderboard that rewards top performers." },
    ],
    duration: "Ongoing partnership",
    team: "Mobile, web & design pod",
    website: "colalamall.com",
  },
  {
    id: "kokolet-luxury",
    category: "Software",
    client: "Kokolet Luxury (Lagos)",
    title: "Kokolet Luxury — a sneaker & fashion boutique app with a built-in loyalty circle",
    year: "2025",
    cover: kokoletCover,
    shots: [kokoletHome, kokoletProduct, kokoletLoyalty],
    kind: "mobile",
    mobileShots: [
      { src: kokoletHome, label: "Home", caption: "Curated categories, new arrivals and latest drops in a clean editorial layout." },
      { src: kokoletShop, label: "Shop", caption: "Browse Dunks, Jordans, SB Dunks, Air Force and accessories with live search and filters." },
      { src: kokoletProduct, label: "Product Details", caption: "Full product gallery, size picker, size guide and one-tap Buy Now or Add to Bag." },
      { src: kokoletCart, label: "Cart", caption: "Edit quantities, move items to wishlist and review totals before checkout." },
      { src: kokoletDrop, label: "Latest Drops", caption: "Hero drop modal surfaces the newest release the moment users open the app." },
      { src: kokoletAccount, label: "My Account", caption: "Orders, points, tier, referral code and a personal dashboard in one place." },
      { src: kokoletLoyalty, label: "Kokolet Luxury Circle", caption: "Tiered loyalty program — Member → Silver → Gold → Platinum, with points redeemable at checkout." },
      { src: kokoletSettings, label: "Account Settings", caption: "Shopping, account, support and policies grouped into a clean settings tree." },
      { src: kokoletHelp, label: "Help Center", caption: "Order tracking, payments, policies and direct WhatsApp / email / phone support." },
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    challenge: "Kokolet Luxury is a Lagos-based boutique selling original designer sneakers and fashion — Nike, Jordan, New Balance, Supreme. Their customers wanted a premium mobile experience that matched the brand, not a generic e-commerce template. They also needed a loyalty engine that would actually bring shoppers back: tiered membership, points from purchases and referrals, and redeemable rewards at checkout.",
    solution: "We designed and built the Kokolet Luxury app on iOS and Android — a fully native shopping experience with a custom black-and-gold luxury design system. On top of the catalogue, cart and checkout, we layered the Kokolet Luxury Circle: a four-tier loyalty program (Member, Silver, Gold, Platinum) with points earned from spend and referrals, transparent cycle tracking, and 1 point = ₦30 redeemable directly at checkout.",
    outcome: "Kokolet Luxury is live on both the App Store and Google Play. Customers shop the latest drops, manage orders and wishlist, refer friends for points and climb tiers — all inside a single boutique-grade app that has become the brand's primary sales channel.",
    metrics: [
      { v: "4+", l: "Years partnered" },
      { v: "2", l: "iOS + Android stores" },
      { v: "4", l: "Loyalty tiers" },
    ],
    tech: ["React Native", "Node.js", "TypeScript", "Postgres", "Stripe / Paystack", "Push Notifications"],
    services: [
      "Native iOS & Android app",
      "Product catalogue & search",
      "Cart, wishlist & checkout",
      "Tiered loyalty program",
      "Referral rewards engine",
      "In-app help & support",
    ],
    features: [
      { title: "Boutique Shopping Experience", body: "Curated categories, latest drops and product galleries designed to feel like a luxury flagship — not a marketplace." },
      { title: "Kokolet Luxury Circle", body: "Four-tier loyalty program — Member, Silver, Gold and Platinum — with transparent spend thresholds and benefits at every level." },
      { title: "Points & Rewards", body: "Earn points from every purchase and successful referral. 1 point = ₦30, redeemable directly at checkout for instant discounts." },
      { title: "Referral Engine", body: "Every shopper gets a personal referral code worth points per signup — built-in share sheet for one-tap invites." },
      { title: "Latest Drops", body: "A hero drop modal on app open surfaces the newest sneaker release immediately, driving urgency around launches." },
      { title: "Full Self-Serve Support", body: "Order tracking, payments, refund and policy pages, plus WhatsApp, email and phone support from inside the app." },
    ],
    duration: "4+ year partnership · ongoing",
    team: "Mobile, backend & design pod",
    website: "kokoletluxury.com",
  },
  {
    id: "rhinoxpay-fintech",
    category: "Software",
    client: "RhinoxPay",
    title: "RhinoxPay — send money across Africa, pay bills & trade crypto P2P",
    year: "2025",
    cover: rhinoxCover,
    shots: [rhinoxHome, rhinoxP2P, rhinoxBills],
    kind: "mobile",
    mobileShots: [
      { src: rhinoxHome, label: "Home", caption: "Multi-currency balance, send / fund / convert quick actions and active African wallets in one view." },
      { src: rhinoxSend, label: "Send Funds", caption: "Send to another RhinoxPay user, a bank account, or mobile money across Africa in seconds." },
      { src: rhinoxFiat, label: "Fiat Wallets", caption: "NGN, KSH, GHC and more — hold and switch between African currencies with a unique wallet ID." },
      { src: rhinoxCrypto, label: "Crypto Wallet", caption: "Deposit, withdraw and P2P trade BTC, ETH, SOL, USDT and other assets from a unified crypto wallet." },
      { src: rhinoxBills, label: "Bill Payments", caption: "Airtime, data, electricity, cable TV, betting and internet — paid in a tap from any wallet." },
      { src: rhinoxP2P, label: "P2P Market", caption: "Trade assets directly with other users. Buy or sell across countries with payment-method matching." },
      { src: rhinoxAds, label: "My Ads", caption: "List your own buy / sell ads with limits, payment methods and live order tracking." },
      { src: rhinoxHistory, label: "Transaction History", caption: "Daily, weekly and monthly insights with incoming / outgoing breakdowns across fiat and crypto." },
      { src: rhinoxReceipt, label: "Receipt", caption: "Clean, shareable receipts for every transaction — bank, country, fee and transaction ID." },
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    challenge: "Our client — a young, world-travelling entrepreneur — kept hitting the same wall every time he moved between African countries: converting money was expensive, cross-border transfers were slow, and paying for everyday things in another currency required a chain of apps, agents and fees. Even within a single country, sending money or paying bills took too many steps. He wanted one application where anyone in Africa could send and receive money across borders, pay bills, and trade crypto — in seconds.",
    solution: "We designed and built RhinoxPay end-to-end as a React Native app on iOS and Android, backed by a Node.js + Postgres core. Users hold multi-currency African wallets (NGN, KSH, GHC and more), a crypto wallet for BTC / ETH / SOL / USDT, and a built-in P2P marketplace for trading assets directly with other users via mobile money or bank transfer. A unified bill-payment rail covers airtime, data, electricity, cable TV, internet and betting — funded from any wallet in the app.",
    outcome: "RhinoxPay launched on the App Store and Google Play as a single fintech super-app for cross-Africa money movement. Users can move funds between countries, swap into crypto, trade P2P and clear monthly bills without ever leaving the app.",
    metrics: [
      { v: "Pan-Africa", l: "Cross-border transfers" },
      { v: "2", l: "iOS + Android stores" },
      { v: "P2P", l: "Crypto marketplace" },
    ],
    tech: ["React Native", "Node.js", "TypeScript", "Postgres", "Crypto Wallets", "Mobile Money APIs", "Bank Rails"],
    services: [
      "Native iOS & Android app",
      "Multi-currency African wallets",
      "Crypto wallet & on/off ramp",
      "P2P trading marketplace",
      "Bill payments rail",
      "Cross-border remittance",
    ],
    features: [
      { title: "Multi-Currency African Wallets", body: "Hold NGN, KSH, GHC and more in dedicated wallets, each with its own wallet ID — fund, withdraw and convert between currencies in-app." },
      { title: "Cross-Border Transfers", body: "Send money from Nigeria to Kenya, Ghana, Cameroon, South Africa and more via mobile money, bank transfer, or directly to another RhinoxPay user." },
      { title: "Crypto Wallet", body: "Buy, sell, send and receive BTC, ETH, SOL, USDT and other top assets with a unified balance view and live valuations." },
      { title: "P2P Marketplace", body: "Trade crypto directly with other users. List ads with your own limits, payment methods and price — with order tracking and score-based reputation." },
      { title: "Bill Payments", body: "Airtime, data, electricity, cable TV, internet and betting — funded from any wallet, with receipts and a clear transaction history." },
      { title: "Insights & Receipts", body: "Daily / weekly / monthly transaction insights, incoming vs outgoing breakdowns and shareable receipts for every payment." },
    ],
    duration: "Launched 2025",
    team: "Mobile, backend & design pod",
    website: "rhinoxpay.com",
  },
  {
    id: "gympaddy-social",
    category: "Software",
    client: "GymPaddy",
    title: "GymPaddy — social network, marketplace & live streaming for the fitness community",
    year: "2025",
    cover: gpCover,
    shots: [gpFeed, gpMarket, gpWallet],
    kind: "mobile",
    mobileShots: [
      { src: gpFeed, label: "Socials Feed", caption: "Stories, posts, likes, comments and shares — Instagram-style feed built around fitness motivation and routines." },
      { src: gpPost, label: "Create Post", caption: "Post photos and videos from your gallery to share workouts, progress and inspiration with the community." },
      { src: gpProfile, label: "Profile", caption: "Followers, following, posts and videos tabs — follow other fitness lovers and grow your community." },
      { src: gpMarket, label: "Marketplace", caption: "Buy and sell gym equipment, supplements, wears and more. Categories, top listings and location-based search." },
      { src: gpChat, label: "Direct Messages", caption: "1:1 chat with other members with profile preview, follower count and quick call shortcuts." },
      { src: gpCall, label: "Video & Audio Calls", caption: "Connect face-to-face with friends, trainers and partners through built-in video and audio calling." },
      { src: gpLive, label: "Live Streaming + Gifts", caption: "Go live to your followers and receive virtual gifts from viewers in real time." },
      { src: gpWallet, label: "Wallet (GP Coins)", caption: "Earn from gifts in live streams, top up, withdraw to bank, and track every transaction." },
      { src: gpBoost, label: "Boost Ad", caption: "Businesses and fitness experts can boost posts and promote products, services and courses for wider reach." },
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    challenge: "Our founder — a passionate fitness lover — wanted a space where anybody chasing a healthier life could connect, motivate each other, share routines and shop for everything fitness in one place. General social apps weren't built for the fitness community, and shopping for equipment, supplements and coaching was scattered across dozens of pages and stores.",
    solution: "We designed and built GymPaddy as a single React Native app on iOS and Android: a social feed for posts, stories, likes, comments and shares; a marketplace for gym equipment, supplements, wears and more; a messaging layer with DMs, video and audio calls; and a live-streaming surface with virtual gifts. A built-in GP Coins wallet lets creators earn from gifts, top up and withdraw to bank, while businesses and fitness experts can boost posts and promote their products, courses and services.",
    outcome: "GymPaddy launched on the App Store and Google Play as a fitness-first social platform — combining community, commerce and creator monetization into one app.",
    metrics: [
      { v: "1 App", l: "Social + commerce" },
      { v: "2", l: "iOS + Android stores" },
      { v: "Live", l: "Creator monetization" },
    ],
    tech: ["React Native", "Node.js", "TypeScript", "Postgres", "WebRTC", "Live Streaming", "Payments"],
    services: [
      "Native iOS & Android app",
      "Social feed & stories",
      "Marketplace for fitness gear",
      "DMs, video & audio calls",
      "Live streaming with virtual gifts",
      "Wallet, ads & post boosting",
    ],
    features: [
      { title: "Fitness-First Social Feed", body: "Stories, photo & video posts, likes, comments and shares — built for fitness inspiration and motivation, not generic content." },
      { title: "Marketplace", body: "Buy & sell gym equipment, supplements, wears and other fitness products with categories, top ads and location-based search." },
      { title: "Messaging, Video & Audio Calls", body: "DM other members and jump into face-to-face video or audio calls without leaving the app." },
      { title: "Live Streaming + Virtual Gifts", body: "Go live to your followers and receive GP-coin gifts in real time from viewers cheering you on." },
      { title: "GP Coins Wallet", body: "Earn from gifts, top up, withdraw to bank and track every transaction with a clean wallet view." },
      { title: "Ads & Post Boosting", body: "Businesses and fitness experts can boost posts and promote products, courses and services to targeted fitness audiences." },
    ],
    duration: "Launched 2025",
    team: "Mobile, backend & design pod",
    website: "gympaddy.app",
  },
  {
    id: "billspro-fintech",
    category: "Software",
    client: "BillsPro (UK)",
    title: "BillsPro — crypto, bills & USD virtual cards in one fintech app",
    year: "2026",
    cover: billsproCover,
    shots: [billsproHome, billsproCard, billsproCrypto],
    kind: "mobile",
    mobileShots: [
      { src: billsproHome, label: "Home", caption: "Naira balance, quick actions, virtual cards & crypto access in one tap." },
      { src: billsproBills, label: "Bill Payments", caption: "Airtime, data, electricity, cable TV, internet and betting — all via BillsPro." },
      { src: billsproCard, label: "Virtual Cards", caption: "USD Visa & Mastercard with Apple Pay / Google Pay support, 3DS controls and freeze." },
      { src: billsproNaira, label: "Naira Wallet", caption: "Deposit, withdraw and pay bills directly from a secure Naira wallet." },
      { src: billsproCrypto, label: "Crypto Wallet", caption: "Buy, sell, send and receive BTC, ETH, USDT and more from a self-custody-style wallet." },
      { src: billsproTx, label: "Transactions", caption: "Unified history across Naira, Crypto and Virtual Card with deposit insights." },
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    challenge: "BillsPro's founders saw three painful gaps in the African fintech experience: USD virtual cards that actually work on international sites, a clean way to buy and hold crypto, and a single place to pay everyday bills. Existing apps solved one, badly. The team needed a flagship mobile product that pulled all three into one trustworthy, polished experience — ready for both the App Store and Play Store on day one.",
    solution: "We designed and built BillsPro end-to-end as a React Native app on a Node.js backend. Modular Naira and Crypto wallets, USD Visa & Mastercard virtual cards (with Apple Pay / Google Pay), and a BillsPro payments rail for airtime, data, electricity, cable TV, internet and betting — all wrapped in a single emerald-green design system. Security flows include 3DS notifications, card freeze, and biometric session locks.",
    outcome: "BillsPro launched on the App Store and Google Play in June 2026 for a UK-based private client. Users can fund a Naira wallet, spin up a USD card that works on thousands of international sites, top up phones and pay utility bills, and trade crypto — without ever leaving the app.",
    metrics: [
      { v: "3-in-1", l: "Cards · Bills · Crypto" },
      { v: "2", l: "iOS + Android stores" },
      { v: "USD", l: "Virtual Visa & Mastercard" },
    ],
    tech: ["React Native", "Node.js", "TypeScript", "Postgres", "Apple Pay", "Google Pay", "3DS", "Crypto Wallets"],
    services: [
      "Native iOS & Android app",
      "USD virtual card issuing flow",
      "Multi-currency wallet (Naira + Crypto)",
      "Bill payments rail (BillsPro)",
      "Apple Pay & Google Pay integration",
      "Transaction history & analytics",
    ],
    features: [
      { title: "USD Virtual Cards", body: "Issue Visa or Mastercard virtual cards in seconds, fund in USD, and use them on thousands of international websites — with Apple Pay and Google Pay support." },
      { title: "Bill Payments", body: "Pay airtime, data, electricity, cable TV, internet and betting wallets in a single tap, with a clean receipt-first transaction history." },
      { title: "Crypto Wallet", body: "Buy, sell, send and receive BTC, ETH, USDT and more. Unified balance view across coins with live valuations in USD." },
      { title: "Naira Wallet", body: "Fund a secure Naira wallet via bank transfer, withdraw anytime, and route money into cards, bills or crypto in-app." },
      { title: "Security First", body: "3DS approval notifications, card freeze, biometric unlock and granular spend controls keep every transaction in the user's hands." },
      { title: "One Clean Experience", body: "A single emerald design system across iOS and Android — fast, native, and built to feel familiar from the very first screen." },
    ],
    duration: "Launched June 2026",
    team: "Mobile, backend & design pod",
    website: "billspro.app",
  },
  {
    id: "earlybaze-crypto",
    category: "Software",
    client: "Earlybaze Technologies (Lagos)",
    title: "Earlybaze — buy, sell & swap crypto direct to Naira and ZAR",
    year: "2025",
    cover: earlybazeCover,
    shots: [ebHome, ebBitcoin, ebSwap],
    kind: "mobile",
    mobileShots: [
      { src: ebHome, label: "Crypto Home", caption: "Unified crypto wallet view with quick send, receive, buy and swap." },
      { src: ebNairaHome, label: "Naira Home", caption: "Switch to a dedicated Naira wallet — view balance and withdraw to bank in a tap." },
      { src: ebAssets, label: "Assets", caption: "Trade across BTC, USDT, ETH, SOL, TRX, BNB, TON, OP, MATIC and more." },
      { src: ebBitcoin, label: "Asset Detail", caption: "Live price, holdings, P&L and per-asset activity in one screen." },
      { src: ebReceive, label: "Receive", caption: "Multi-network deposits with QR, address copy and network-mismatch protection." },
      { src: ebSwap, label: "Swap", caption: "Swap any supported coin to Naira (NGN) or another asset at live rates." },
      { src: ebTxSuccess, label: "Sell to Naira", caption: "Sell crypto and credit a Nigerian bank account directly from the app." },
      { src: ebWithdrawal, label: "Withdrawal", caption: "Bank withdrawals with a clear step-by-step status timeline and receipt." },
      { src: ebTransactions, label: "Transactions", caption: "Filterable history across Send, Receive, Buy, Swap and Withdraw with charts." },
    ],
    appStoreUrl: "#",
    playStoreUrl: "#",
    challenge: "Earlybaze started five years ago as a chat-to-trade product — users would message a live agent, who manually generated wallets, took crypto and pushed Naira to their bank. It worked, but it didn't scale: every trade was human-paced, and the team couldn't grow without growing the agent desk. They needed a self-serve mobile app that kept the trust of the chat era while removing the bottleneck.",
    solution: "We rebuilt Earlybaze as a full self-custody-style mobile app on React Native with a Node.js backend. Users hold a multi-coin wallet (BTC, USDT, ETH, SOL, TRX, BNB, TON, OP, MATIC and more), send and receive across networks with QR + network-guard, swap between assets, and sell crypto straight into a Naira or ZAR bank account. Withdrawal flows include a live step-by-step status timeline and downloadable receipts.",
    outcome: "Earlybaze is live on iOS and Android across Nigeria and South Africa, serving both markets from a single Lagos-based product. What used to take an agent-led chat now happens in under a minute, fully self-serve — while the brand's signature emerald, trust-first feel carries through every screen.",
    metrics: [
      { v: "5", l: "Years partnered" },
      { v: "2", l: "Nigeria + South Africa" },
      { v: "10+", l: "Supported assets & networks" },
    ],
    tech: ["React Native", "Node.js", "TypeScript", "Postgres", "Crypto Wallets", "Bank Payouts"],
    services: [
      "Native iOS & Android app",
      "Multi-coin crypto wallet",
      "Crypto → Naira / ZAR off-ramp",
      "Multi-network deposits & withdrawals",
      "In-app swap engine",
      "Transaction history & analytics",
    ],
    features: [
      { title: "Multi-Coin Wallet", body: "Hold and manage BTC, USDT, ETH, SOL, TRX, BNB, TON, OP, MATIC and more — with live valuations and per-asset activity." },
      { title: "Send & Receive", body: "Network-aware deposits and withdrawals with QR codes, copy-address flows and warnings to prevent wrong-network loss of funds." },
      { title: "Sell to Naira & ZAR", body: "Convert any supported asset directly into a Nigerian or South African bank account at live exchange rates." },
      { title: "In-App Swap", body: "Swap between any two supported assets in seconds, with transparent rates and exchange previews before you confirm." },
      { title: "Bank Withdrawals", body: "Track every withdrawal through a clear submitted → processed → successful timeline, with a shareable receipt at the end." },
      { title: "Two Markets, One App", body: "Built ground-up for Nigeria and South Africa — local rails, local currencies, one trusted Earlybaze experience." },
    ],
    duration: "5-year partnership · ongoing",
    team: "Mobile, backend & design pod",
    website: "earlybaze.com",
  },
  {
    id: "above-lifestyle",
    category: "Website",
    client: "Above Lifestyle (Lekki & Ikotun)",
    title: "From paper menus to a digital restaurant — websites & QR-linked menus for Above Lifestyle",
    year: "2024",
    cover: above20,
    shots: [above20, above21, above22, above23, above24, above25, above26, above27],
    challenge: "Above Lifestyle, a premium restaurant & lounge with branches in Lekki and Ikotun, had no online presence and were handing out paper menus that were constantly being reprinted, lost, or out of date. Guests had no way to discover the brand online, browse the menu before arriving, or make a reservation without calling.",
    solution: "We designed and built a full restaurant website with two branch experiences (Lekki and Ikotun), an intuitive digital menu, ambience galleries, and an online reservation flow. The menu doubles as a QR-linked digital menu — guests scan a code at the table and browse the full menu on their phone, organised by category with prices, images and descriptions that staff can update in minutes instead of reprinting.",
    outcome: "Above Lifestyle launched online in 2024 with a single brand presence covering both branches, eliminated their paper-menu reprint cycle, and gave guests a self-serve way to browse, reserve and explore the venue before they ever walk in.",
    metrics: [
      { v: "2", l: "Branches online" },
      { v: "0", l: "Paper menus reprinted" },
      { v: "QR", l: "Tap-to-menu at the table" },
    ],
    tech: ["WordPress", "Custom Theme", "QR Menu", "Reservations", "Responsive Design"],
    services: [
      "Brand website design",
      "Multi-branch site architecture",
      "Digital menu & QR system",
      "Online reservations",
      "Ambience & gallery experience",
    ],
    features: [
      { title: "Two Branches, One Brand", body: "Dedicated Lekki and Ikotun experiences under one cohesive Above Lifestyle identity — each with its own menu, ambience and contact details." },
      { title: "QR-Linked Digital Menu", body: "Guests scan a QR code at the table to open the full menu on their phone — categories, prices, photos — no app install, no waiting on staff." },
      { title: "Self-Serve Reservations", body: "Visitors book a table directly from any page in seconds, replacing call-only bookings and reducing front-of-house phone load." },
      { title: "Editable in Minutes", body: "Staff update items, prices and availability from a simple admin — no reprinting, no design back-and-forth, no stale menus on the floor." },
      { title: "Ambience-First Storytelling", body: "Hero galleries, interior shots and brand story pages sell the experience before guests even arrive — turning the site into a sales tool, not a brochure." },
    ],
    duration: "Launched 2024",
    team: "1 designer · 1 engineer",
    website: "abovelifestyle.com",
    fullpage: _asset_0_abovelife,
  },
  {
    id: "arctic-obgyn",
    category: "Website",
    client: "Arctic Gynae Centre (Lagos)",
    title: "Putting a specialist OB/GYN centre on the map — website for Arctic Gynae Centre",
    year: "2024",
    cover: _asset_1_arctic,
    shots: [],
    challenge: "Arctic Gynae Centre, a specialist obstetrics & gynaecology facility in Lagos, had no real digital presence. Women searching online for trusted OB/GYN care in Nigeria couldn't find them, see the facility, meet the doctors, or book an appointment without making a phone call.",
    solution: "We designed and built a clean, trust-led website for Arctic Gynae Centre — introducing the clinic, its specialists, services, and the facility itself through clear sections, real imagery, and an online appointment flow. The site is structured around how patients actually decide: who are the doctors, what does the facility look like, what services do they offer, and how do I book.",
    outcome: "Since launch, hundreds of new patients have discovered Arctic Gynae Centre online, the clinic has gained meaningful visibility in the Lagos market, and steady positive reviews have followed from patients who first found them through the site.",
    metrics: [
      { v: "100s", l: "New patients found online" },
      { v: "24/7", l: "Online appointment booking" },
      { v: "↑", l: "Reviews & visibility" },
    ],
    tech: ["WordPress", "Custom Theme", "Appointment Booking", "SEO", "Responsive Design"],
    services: [
      "Brand website design",
      "Doctors & services pages",
      "Facility showcase",
      "Online appointment booking",
      "Local SEO foundation",
    ],
    features: [
      { title: "Meet the Specialists", body: "Dedicated doctor profiles build trust before the first visit — credentials, focus areas and a human face for each consultant." },
      { title: "Tour the Facility", body: "Real imagery of the clinic and rooms reassures patients that they're choosing a serious, well-equipped specialist centre." },
      { title: "Book Online, Anytime", body: "Patients request appointments directly from the site instead of calling — capturing leads outside clinic hours and reducing phone load." },
      { title: "Found on Google", body: "SEO-ready structure and content help women searching for OB/GYN care in Lagos actually land on Arctic instead of a competitor." },
      { title: "Built for the Total Woman", body: "Information architecture mirrors the clinic's mission — obstetrics, gynaecology, wellness — so every visitor quickly finds the care they came for." },
    ],
    duration: "Launched 2024",
    team: "1 designer · 1 engineer",
    website: "arcticobgyn.com",
    fullpage: _asset_2_arctic,
  },
  {
    id: "gfm-extensions",
    category: "Website",
    client: "GFM Extensions (Lagos · Canada)",
    title: "Luxury hair extensions e-commerce — website for GFM Extensions",
    year: "2025",
    cover: _asset_3_gfm,
    shots: [],
    challenge: "A Canada-based hair stylist with a thriving extensions business in Lagos needed more than an Instagram DM funnel. She wanted a real e-commerce home for her luxury brand — somewhere the modern, sophisticated woman could browse collections, trust the quality, and check out without a back-and-forth.",
    solution: "We designed and built a polished e-commerce website for GFM Extensions — premium product storytelling, organised collections, full product detail pages, cart and secure checkout. The visual language leans into luxury: refined typography, generous imagery, and a feel that matches the price point of the hair itself.",
    outcome: "Delivered in 2025, the site gave GFM Extensions a credible global storefront — letting the brand sell luxury extensions to clients beyond Lagos, present its collections like a real fashion house, and convert browsers into buyers without manual order-taking.",
    metrics: [
      { v: "2025", l: "Launched" },
      { v: "24/7", l: "Online store" },
      { v: "Global", l: "Reach beyond Lagos" },
    ],
    tech: ["E-commerce", "Custom Theme", "Secure Checkout", "Responsive Design", "SEO"],
    services: [
      "Brand e-commerce design",
      "Collections & product pages",
      "Cart & checkout flow",
      "Payment integration",
      "Launch SEO foundation",
    ],
    features: [
      { title: "Luxury Storefront", body: "Editorial layout, refined typography and generous product imagery position GFM as a premium house, not just a vendor." },
      { title: "Organised Collections", body: "Waves, sleek strands and custom styles each get their own space so customers can shop by look, not scroll endlessly." },
      { title: "Rich Product Pages", body: "Detailed product views with imagery, lengths and specs help shoppers commit to a high-ticket purchase with confidence." },
      { title: "Frictionless Checkout", body: "A clean cart and secure checkout flow removes the DM-and-bank-transfer dance and lets buyers self-serve end to end." },
      { title: "Sells Globally", body: "An online store unlocks customers far beyond Lagos — the founder's Canadian base and international clients can now order directly." },
    ],
    duration: "Launched 2025",
    team: "1 designer · 1 engineer",
    website: "gfmextensions.com",
    fullpage: _asset_4_gfm,
  },
  {
    id: "kokolet-luxury-web",
    category: "Website",
    client: "Kokolet Luxury (Lagos)",
    title: "A sneaker culture storefront — website for Kokolet Luxury",
    year: "2022",
    cover: _asset_5_kokolet,
    shots: [],
    challenge: "Kokolet Luxury — already our long-time mobile app client — needed a web home that matched their brand: Jordans, Dunks, Air Force and limited-edition Nike drops, all 100% authentic. Customers searching online needed a credible, premium storefront that proved authenticity at a glance and let them shop without going through DMs.",
    solution: "We designed and built kokoletluxury.com as a bold, sneaker-culture-led e-commerce site — strong typography, large product imagery, organised collections (Jordans, Dunks, Air Force, limited editions), full product detail pages, cart and secure checkout. The site mirrors the energy of the brand and complements the existing mobile app.",
    outcome: "Launched in 2022 and live since, the site has become the brand's main online storefront — surfacing new drops to global sneakerheads, converting walk-up visitors into buyers, and reinforcing Kokolet's position as a trusted source for authentic kicks in Lagos.",
    metrics: [
      { v: "2022", l: "Launched" },
      { v: "100%", l: "Authentic drops" },
      { v: "Global", l: "Shipping reach" },
    ],
    tech: ["E-commerce", "Custom Theme", "Secure Checkout", "Responsive Design", "SEO"],
    services: [
      "Brand e-commerce design",
      "Collections & product pages",
      "Cart & checkout flow",
      "Payment integration",
      "Launch SEO foundation",
    ],
    features: [
      { title: "Sneaker-First Storefront", body: "Editorial layout built around big sneaker imagery — Jordans, Dunks, Air Force and limited Nike drops front and centre." },
      { title: "Organised Collections", body: "Browse by silhouette and category instead of endless scrolling — customers find the exact pair they're hunting." },
      { title: "Authenticity, Up Front", body: "Trust signals, brand storytelling and clean product detail pages reassure buyers every pair is 100% authentic." },
      { title: "Frictionless Checkout", body: "Cart and secure checkout flow remove the DM-and-bank-transfer dance and let buyers self-serve end to end." },
      { title: "Complements the App", body: "Sits alongside the Kokolet Luxury mobile app as the brand's public-facing storefront — discovery on the web, loyalty in the app." },
    ],
    duration: "Launched 2022",
    team: "1 designer · 1 engineer",
    website: "kokoletluxury.com",
    fullpage: _asset_6_kokolet,
  },
  {
    id: "earlybaze-web",
    category: "Website",
    client: "Earlybaze (Lagos)",
    title: "Promoting the wallet — marketing website for Earlybaze",
    year: "2024",
    cover: _asset_7_earlybaze,
    shots: [],
    challenge: "Earlybaze — our long-time client on the mobile app side — needed a public-facing website to promote the wallet, explain its features, and convince thousands of Nigerians that it was the simplest, most secure way to manage their digital assets. The app stores alone weren't doing enough storytelling.",
    solution: "We designed and built earlybazewallet.com as a focused marketing site — hero positioning, feature breakdowns, security messaging, screenshots of the app, and clear download CTAs to App Store and Play Store. The site does the convincing; the app does the converting.",
    outcome: "The website became Earlybaze's primary growth surface — pushing app downloads, explaining features to first-time crypto users, and giving the brand a credible web presence to share in campaigns, PR and social.",
    metrics: [
      { v: "1000s", l: "Nigerian users reached" },
      { v: "2 stores", l: "iOS & Android funnel" },
      { v: "24/7", l: "Always-on storefront" },
    ],
    tech: ["Responsive Design", "Custom Theme", "SEO", "Analytics", "App Store Funnels"],
    services: [
      "Marketing website design",
      "Feature & security messaging",
      "App download funnels",
      "SEO foundation",
      "Analytics setup",
    ],
    features: [
      { title: "App-First Storytelling", body: "Every section is built to push the visitor toward downloading the app — features, security and trust all lead to a clear CTA." },
      { title: "Built for First-Time Crypto Users", body: "Plain-language explanations of wallets, swaps and security make Earlybaze approachable for the Nigerian mainstream, not just crypto natives." },
      { title: "Security, Up Front", body: "Security messaging is woven into the hero, features and footer — earning trust before the user even taps Download." },
      { title: "Feature Showcase", body: "Real screenshots of the app's home, swap, send and receive flows let visitors preview the product before installing." },
      { title: "Direct Store Funnels", body: "Prominent App Store and Play Store buttons turn web visitors into app users in a single tap." },
    ],
    duration: "Ongoing partnership",
    team: "1 designer · 1 engineer",
    website: "earlybazewallet.com",
    fullpage: _asset_8_earlybaze,
  },
  {
    id: "crystal-suites",
    category: "Website",
    client: "Crystal Suites & Apartments (Lagos)",
    title: "An online home & booking engine — website for Crystal Suites & Apartments",
    year: "2026",
    cover: _asset_9_crystal,
    shots: [],
    challenge: "Crystal Suites & Apartments — a hospitality property in Egbeda, Lagos with a pool, lounge and exclusive club — had no real online presence. Guests couldn't discover the property on Google, see the rooms and amenities, or book a stay without calling. They needed a real website with bookings built in.",
    solution: "We designed and built crystalsuites-apartments.com as a modern hospitality site — hero imagery of the property, rooms and suites with rates, amenities (pool, lounge, club), location details, and an online booking flow so guests can reserve directly from the site. The visual language leans into warm, modern luxury.",
    outcome: "Launched in 2026, the site gives Crystal Suites a credible online home — guests can now discover the property online, see exactly what they're booking, and reserve a stay 24/7 without calling the front desk.",
    metrics: [
      { v: "2026", l: "Launched" },
      { v: "24/7", l: "Online bookings" },
      { v: "1", l: "Property, fully online" },
    ],
    tech: ["Responsive Design", "Custom Theme", "Booking Integration", "SEO", "Maps & Location"],
    services: [
      "Hospitality website design",
      "Rooms & rates pages",
      "Amenities showcase",
      "Online booking flow",
      "Local SEO foundation",
    ],
    features: [
      { title: "Rooms & Rates, Upfront", body: "Each room and suite gets imagery, amenities and pricing so guests know exactly what they're booking before they tap Reserve." },
      { title: "Amenities Showcase", body: "Pool, lounge and exclusive club are presented with real imagery — selling the full experience, not just a bed for the night." },
      { title: "Book Online, 24/7", body: "An integrated booking flow lets guests reserve directly from the site instead of calling — capturing demand outside reception hours." },
      { title: "Found on Google", body: "Local SEO foundations help travellers searching for hotels in Egbeda and Lagos actually land on Crystal Suites." },
      { title: "Built for the Modern Guest", body: "Fast, mobile-friendly and visual-first — the experience matches what today's travellers expect from any serious hotel website." },
    ],
    duration: "Launched 2026",
    team: "1 designer · 1 engineer",
    website: "crystalsuites-apartments.com",
    fullpage: _asset_10_crystal,
  },
  {
    id: "kokolet-pos",
    category: "Digitization",
    client: "Kokolet Luxury (Lagos)",
    title: "Kokolet Luxury Point of Sale — one inventory across web, app & store",
    year: "2023",
    cover: kokoletPosCover,
    shots: [kokoletPosCover, kokoletPosCheckout, kokoletPosInventory],
    challenge: "Kokolet sells limited-edition sneakers across a website, a mobile app, and a physical store in Lagos. Stock counts drifted between channels, oversells were frequent, and in-store checkout still ran on a generic till that didn't see the digital inventory at all.",
    solution: "We built a custom POS that treats every channel as one inventory. The till runs on the same database as the website and app, syncs in real time, and integrates with thermal printers, barcode scanners and cash drawers at the store. Cashiers ring up sales, apply discounts and loyalty, take card/cash/transfer/QR payments, and print or email branded receipts — all in one flow.",
    outcome: "Oversells dropped to near zero. Floor staff close sales in under 30 seconds, inventory is accurate to the unit across all three channels, and head office sees daily revenue, top SKUs and low-stock alerts on a single dashboard.",
    metrics: [
      { v: "3", l: "Channels unified" },
      { v: "<30s", l: "Checkout time" },
      { v: "Real-time", l: "Stock sync" },
    ],
    tech: ["React", "TypeScript", "Node.js", "Postgres", "Thermal Printer SDK", "Barcode Scanner"],
    services: ["Custom POS", "Inventory sync", "Hardware integration", "Loyalty"],
    duration: "4 months",
    team: "3 engineers · 1 designer",
  },
  {
    id: "wcss-erp",
    category: "Digitization",
    client: "WCSS Global (Integrated Facilities Management)",
    title: "WCSS Global ERP — end-to-end operations for an IFM & hospitality group",
    year: "2024",
    cover: wcssErpCover,
    shots: [wcssErpCover, wcssErpProcurement, wcssErpHr],
    challenge: "WCSS runs integrated facilities management, food service and catering for hospitality, leisure and wellness clients. Operations spanned dozens of spreadsheets and disconnected tools — requisitions, purchasing, vendors, inventory, projects, HR, finance and sales all lived in their own silos, making month-end and project costing painful.",
    solution: "We built a custom ERP that covers every part of the business end to end: requisitions, purchase orders, vendor management, sourcing & RFQs, inventory, projects, HR & payroll, sales, finance and reporting — all on one database with role-based access and full audit trails. Approval workflows, document attachments and notifications are baked into every module.",
    outcome: "Procurement cycles shortened from weeks to days, project costs are now visible in real time, and leadership runs the whole company from a single executive dashboard instead of waiting on monthly reconciliations.",
    metrics: [
      { v: "10+", l: "Modules unified" },
      { v: "End-to-end", l: "Operations coverage" },
      { v: "Real-time", l: "Cost visibility" },
    ],
    tech: ["React", "TypeScript", "Node.js", "Postgres", "Redis", "Role-based Access"],
    services: ["Custom ERP", "Procurement", "HR & Payroll", "Finance", "Projects", "Inventory"],
    duration: "9 months",
    team: "5 engineers · 1 designer · 1 PM",
  },
  {
    id: "mainservice-logistics-erp",
    category: "Digitization",
    client: "Main Service Logistics",
    title: "Main Service Logistics ERP — sea freight, warehousing, trucking & customs in one system",
    year: "2024",
    cover: mainserviceErpCover,
    shots: [mainserviceErpCover, mainserviceErpWarehouse, mainserviceErpCustoms],
    challenge: "Main Service handles the full logistics chain between Nigeria and China — sea freight, warehousing, in-country trucking, and customs clearance. Each service ran on its own tools and spreadsheets, so a single shipment touched four disconnected systems and customers had no clear view of where their cargo was.",
    solution: "We built a single ERP that runs every part of the operation. Sea freight bookings and container tracking, warehouse inbound/outbound with bin locations, fleet dispatch and trucking jobs, and customs documentation with HS codes and duty calculation — all on one platform with a shared shipment timeline, role-based access for ops, finance and customer service, and live tracking links for clients.",
    outcome: "Shipments now move through one system from quote to delivery. Ops resolves status questions in seconds, warehouse and fleet utilisation is visible in real time, and customers see exactly where their cargo is without picking up the phone.",
    metrics: [
      { v: "4-in-1", l: "Services unified" },
      { v: "End-to-end", l: "Shipment visibility" },
      { v: "Real-time", l: "Tracking" },
    ],
    tech: ["React", "TypeScript", "Node.js", "Postgres", "Mapbox", "WebSockets"],
    services: ["Custom ERP", "Freight", "Warehousing", "Trucking", "Customs Clearance"],
    duration: "8 months",
    team: "4 engineers · 1 designer · 1 PM",
  },
];

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id) ?? null;
}
