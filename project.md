# 🏆 SportSpot Mumbai — *Find. Book. Play.*

> **Mumbai's first unified sports venue discovery and tournament management platform — connecting players, turfs, and organizers across the city in one powerful experience.**

---

## 📌 Table of Contents

1. [Problem Statement](#problem-statement)
2. [Solution Overview](#solution-overview)
3. [Key Features](#key-features)
4. [Advanced UI/UX Features](#advanced-uiux-features)
5. [Tech Stack](#tech-stack)
6. [System Architecture](#system-architecture)
7. [Folder Structure](#folder-structure)
8. [How It Works](#how-it-works)
9. [Installation & Setup](#installation--setup)
10. [Future Enhancements](#future-enhancements)
11. [Challenges & Solutions](#challenges--solutions)
12. [Demo / Usage](#demo--usage)
13. [Contributors](#contributors)

---

## 🚨 Problem Statement

### The Problem

Sports enthusiasts across Mumbai face a fragmented, frustrating experience when trying to book venues or organize tournaments. Finding the right turf or sports facility is a manual, time-consuming process involving phone calls, WhatsApp messages, and unreliable word-of-mouth.

### Why It Matters

- Mumbai has **thousands of sports venues** — football turfs, cricket nets, badminton courts, swimming clubs — yet there is **no single platform** to discover and book them.
- Players waste hours calling venues one by one, only to find slots already taken.
- Organizers managing local tournaments rely on **spreadsheets, paper forms, and group chats** to track registrations, fixtures, and results.
- Small venue owners lack digital tools to **showcase their facility**, manage bookings, and reduce no-shows.
- Sports communities (corporate teams, college groups, housing society leagues) have **no centralized tool** for running seasonal tournaments.

### Who Is Affected

- **Casual players** (18–40 years) looking for a nearby turf for a weekend game.
- **Sports organizers and coaches** running local leagues and inter-club tournaments.
- **Venue owners and managers** of turfs, courts, and sports clubs across Mumbai.
- **Corporate and college sports teams** organizing internal tournaments.
- **Housing society sports committees** managing seasonal leagues.

---

## 💡 Solution Overview

**SportSpot Mumbai** is a full-stack, AI-enhanced web platform that brings Mumbai's sports ecosystem into one seamless experience.

It serves three types of users on one platform:

- **Players** — Discover venues by location, sport, and availability; book a slot in under 2 minutes.
- **Organizers** — Create and manage complete tournaments with automated fixtures, brackets, live scoring, and team management.
- **Venue Owners** — List their facility, manage availability calendars, and receive bookings with zero phone calls.

Powered by smart location filtering (Navi Mumbai, Andheri, Mumbai City, Mumbai Suburban), real-time slot availability, and AI-powered recommendations, SportSpot eliminates every friction point from "I want to play" to "slot confirmed."

---

## 🚀 Key Features

### 1. 📍 Location-Based Venue Discovery

The heart of the platform — a rich, filterable venue explorer:

- **Location Zones**: Navi Mumbai, Andheri, Mumbai City, Mumbai Suburban, Thane, and more.
- Users select a zone → browse **venue cards** with:
  - Venue name, address, Google Maps link
  - Sports available (Football, Cricket, Badminton, Basketball, Tennis, Swimming, etc.)
  - Pricing per hour per sport
  - Operating hours
  - Ratings and review count
  - Amenities (parking, changing rooms, floodlights, cafeteria)
  - Photo gallery
- **Advanced Filters**: Sport type, price range, availability date, amenities, rating, distance.
- **Map View**: Interactive Google Maps overlay showing all venues in the selected zone.
- **Sort Options**: Nearest first, Highest rated, Lowest price, Most available.

### 2. 📅 Seamless Venue Booking

A streamlined, zero-friction booking flow:

- **Slot Calendar**: Visual weekly calendar showing available (green), booked (red), and pending (yellow) slots.
- **Sport Selection**: Choose the sport within the venue (venues can host multiple sports).
- **Duration Picker**: Book in 1-hour increments (or custom slots set by venue).
- **Team Size Input**: Enter number of players for capacity validation.
- **Booking Summary**: Venue name, sport, date, time, duration, total price.
- **Payment Integration**: Razorpay gateway for online payment (UPI, Cards, Netbanking).
- **Instant Confirmation**: Email + SMS confirmation with booking ID and QR code.
- **Booking Management**: Users can view, reschedule, or cancel bookings from their dashboard (cancellation policy enforced per venue rules).
- **No-Show Protection**: Partial refund system with automatic release of slots 30 minutes before if unpaid.

### 3. 🏅 Tournament Management System

A complete end-to-end tool for organizing sports tournaments:

**For Organizers:**
- Create a tournament with:
  - Name, sport, location, dates, format (Knockout, Round Robin, Double Elimination, League)
  - Max teams, entry fee, prize details, rules
  - Linked venue (book via SportSpot or add external venue)
- **Team Registration**: Share a public registration link; teams fill in details and pay entry fee.
- **Auto Fixture Generation**: System generates fixtures automatically based on format and number of teams.
- **Bracket Visualization**: Beautiful, live-updating tournament bracket (like Wimbledon draw).
- **Score Entry**: Organizer enters match scores → bracket updates in real time.
- **Standings Table**: Auto-calculated points table for league/round-robin formats.
- **Participant Notifications**: Automated WhatsApp/email notifications for match schedules, reminders, and results.
- **Certificates & Awards**: Auto-generate winner/participant certificates (PDF download).

**For Players/Teams:**
- Browse open tournaments by sport, location, and date.
- Register individually or as a team captain (invite teammates via link).
- View personal match schedule, venue directions, and live results.
- Tournament history in player profile (wins, losses, tournaments played).

### 4. 👤 User Profile & Player Dashboard

A personalized hub for every player:

- **Profile Setup**: Name, photo, preferred sports, location, skill level.
- **Booking History**: All past and upcoming bookings with status.
- **Tournament History**: Tournaments registered, results, certificates earned.
- **Favorite Venues**: Saved venues with one-click rebooking.
- **Sports Stats**: Hours played, courts visited, tournaments won.
- **Reviews Written**: Manage ratings left for venues.
- **Wallet**: SportSpot credits for cancellation refunds and promotional rewards.

### 5. 🏟 Venue Owner Dashboard

A dedicated portal for sports facility managers:

- **Venue Profile Editor**: Update details, photos, pricing, and amenities.
- **Availability Manager**: Block dates, set operating hours, manage recurring closures.
- **Booking Inbox**: View upcoming bookings, player details, payment status.
- **Revenue Analytics**: Daily/weekly/monthly earnings, peak hours, sport-wise breakdown.
- **Review Management**: View and respond to player reviews.
- **Promotional Tools**: Create discount offers (e.g., "20% off weekday mornings").

### 6. ⭐ Reviews, Ratings & Community

- Post-booking, users are prompted to rate and review the venue.
- **Rating dimensions**: Surface quality, lighting, facilities, value for money, staff behavior.
- Photo uploads allowed with reviews.
- **Verified Review Badge**: Only users who booked can review (no fake reviews).
- **Helpful Votes**: Community can mark reviews as helpful.
- Venue responds to reviews publicly.

### 7. 🔔 Smart Notifications & Alerts

- **Slot Availability Alerts**: Users subscribe to a venue + sport combination; notified when a slot opens up.
- **Booking Reminders**: 24 hours and 2 hours before the booked slot.
- **Tournament Updates**: Match schedule released, score updates, bracket changes.
- **Price Drop Alerts**: Venue runs a promotion on a saved venue.
- Delivered via email, SMS, and browser push notifications.

### 8. 🤖 AI-Powered Recommendations (Gemini API)

- **"Find me the best turf"**: User describes their need in plain text → AI recommends the top 3 venues.
  - *"I need a cricket net in Andheri on Saturday evening under ₹500/hr"* → Returns matched venues with reasoning.
- **Venue Review Summarizer**: Paste multiple reviews into the Gemini-powered summarizer → get a 3-point summary of strengths and weaknesses.
- **AI Tournament Bracket Commentary**: After each match result, AI generates a short match summary and next-round prediction.
- **Smart Rescheduling Assistant**: Booking conflict? Describe your constraint and AI suggests the best alternative slot.

---

## 🎨 Advanced UI/UX Features

### 1. Smooth Page Transitions & Animations

**Implementation**: **Framer Motion** with `AnimatePresence` in Next.js App Router.

- Route transitions use a `fade + slide` pattern — content enters from below, exits upward.
- Venue cards animate in with **staggered reveals** on category/filter change.
- Tournament bracket nodes animate branch-by-branch as the draw is revealed.
- Booking flow steps use a **slide-left/slide-right** wizard transition.

```tsx
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};
```

### 2. Animated SVG Icons & Illustrations

- **Sport Icons**: Custom animated SVGs per sport — football bouncing, cricket bat swinging on hover.
- **Booking Confirmation**: Animated checkmark SVG drawn on success with `stroke-dashoffset`.
- **Empty State Illustrations**: Unique sports-themed SVGs for "no venues found", "no bookings yet".
- **Tournament Trophy**: Animated gold trophy that shimmers on tournament completion.
- **Map Pin**: Pulsing animated location pin for selected venue on map.

### 3. Scroll-Based Animations

**Implementation**: Framer Motion `useInView` + Intersection Observer API.

- Venue cards on the discovery page animate in as the user scrolls.
- Stats on the homepage (venues listed, bookings made, tournaments hosted) count up on first scroll into view using a `useCountUp` hook.
- "How It Works" section steps reveal one-by-one as user scrolls.
- Tournament standings table rows stagger in from left on scroll.

### 4. Full Mobile Responsiveness

**Implementation**: Tailwind CSS mobile-first with responsive breakpoints.

- **Mobile**: Bottom tab bar (Home, Discover, My Bookings, Tournaments, Profile).
- **Desktop**: Persistent sidebar navigation.
- Venue cards: 1 column (mobile) → 2 (tablet) → 3 (desktop).
- Booking calendar adapts: horizontal scroll on mobile, full grid on desktop.
- Tournament bracket: horizontal scroll with snap points on mobile.
- All modals become **bottom-sheet drawers** on mobile with swipe-to-dismiss.

### 5. Light / Dark Mode Toggle

**Implementation**: `next-themes` + CSS custom properties.

- Sports theme: Bright green accent (`#16a34a`) in light mode; electric green (`#4ade80`) in dark.
- Toggle persists via `localStorage`; system preference detected on first visit.
- Map tiles switch between standard (light) and dark map style (Mapbox dark theme).
- Smooth 300ms color crossfade transition.

```css
:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #0f172a;
  --accent: #16a34a;
  --border: #e2e8f0;
}
[data-theme="dark"] {
  --bg: #0a0f1e;
  --surface: #111827;
  --text: #f1f5f9;
  --accent: #4ade80;
  --border: #1e293b;
}
```

### 6. Custom Cursor Effects

- Default: Circular cursor with sport-green glow.
- On venue cards: Cursor transforms into a sports ball emoji relevant to the card's primary sport.
- On CTA buttons: Magnetic pull effect with cursor expansion.
- On the map: Cursor becomes a crosshair/location pin.
- Disabled on mobile/touch devices.

### 7. Micro-Interactions

- **Venue Card Hover**: Card lifts with shadow + sport tag pills animate in from the bottom.
- **Slot Selection**: Clicking a time slot plays a satisfying "tick" micro-animation; selected slot glows.
- **Booking Button**: Shimmer effect while processing payment; morphs to a checkmark on success.
- **Filter Pills**: Smooth scale + color fill on toggle.
- **Rating Stars**: Stars fill left to right with a spring animation on hover.
- **Tournament Bracket**: Winning team name animates in with a gold highlight when score is entered.
- **Heart/Favorite**: Heartbeat animation when user saves a venue.

### 8. Error Handling (UI + API Level)

**UI Level:**
- **Empty States**: Illustrated, contextual empty states for every scenario — "No venues in this area yet", "No open slots on this date", "No tournaments this week".
- **Form Validation**: Inline real-time validation with red border + shake animation on submit error.
- **Payment Failure**: Friendly modal with specific reason and retry option (no raw error codes).
- **Skeleton Loaders**: Content-aware skeletons for venue cards, slot calendar, and bracket.
- **Toast System**: Color-coded toasts for success (green), warning (amber), error (red).

**API Level:**
```ts
async function withRetry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err: any) {
      if (i === retries - 1 || err.status === 400) throw err;
      await new Promise(r => setTimeout(r, 800 * 2 ** i));
    }
  }
  throw new Error("Max retries reached");
}
```

- Razorpay webhook failures handled with idempotency keys.
- Gemini API rate limit handled with client-side throttle + graceful fallback text.
- Network loss detected with `navigator.onLine`; offline banner shown; critical actions queued.

### 9. PWA (Progressive Web App)

**Implementation**: `next-pwa` with Workbox service worker strategy.

- `manifest.json` with SportSpot icons, theme color `#16a34a`, `standalone` display mode.
- **Offline Mode**: Venue list and personal bookings cached via service worker — viewable offline.
- **Install Prompt**: Custom "Add to Home Screen" bottom banner with SportSpot icon.
- **Background Sync**: Booking attempts queued when offline; auto-submitted on reconnect.
- **Push Notifications**: Slot availability alerts, booking reminders, tournament match notifications (opt-in).
- **App Shortcuts**: Quick actions from home screen icon — "Book a Turf", "My Schedule".

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + CSS Variables |
| **Animations** | Framer Motion |
| **State Management** | Zustand + React Query (TanStack Query) |
| **Database** | PostgreSQL (via Supabase) |
| **ORM** | Prisma |
| **Auth** | Supabase Auth (Email, Google OAuth) |
| **File Storage** | Supabase Storage (venue photos, certificates) |
| **Maps** | Google Maps JavaScript API / Mapbox GL |
| **Payments** | Razorpay |
| **AI / LLM** | Google Gemini API (`gemini-1.5-flash`) |
| **Notifications** | Resend (email), Twilio (SMS), Web Push API |
| **PDF Generation** | jsPDF + html2canvas |
| **Charts & Analytics** | Recharts |
| **PWA** | next-pwa (Workbox) |
| **Form Handling** | React Hook Form + Zod |
| **Icons** | Lucide React + custom animated SVGs |
| **Theming** | next-themes |
| **Dev Tools** | ESLint, Prettier, Husky, Commitlint |
| **Deployment** | Vercel (frontend + API routes) |

---

## 🏗 System Architecture

```
                        ┌─────────────────────┐
                        │   User (Browser/PWA) │
                        └──────────┬──────────┘
                                   │
                        ┌──────────▼──────────┐
                        │   Next.js Frontend   │
                        │   (Vercel Edge)      │
                        │                      │
                        │  Pages / Components  │
                        │  ├─ Discovery        │
                        │  ├─ Venue Detail     │
                        │  ├─ Booking Flow     │
                        │  ├─ Tournament Hub   │
                        │  ├─ Dashboard        │
                        │  └─ Venue Portal     │
                        └──────────┬──────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
    ┌─────────▼──────┐   ┌────────▼───────┐   ┌───────▼────────┐
    │  Next.js API   │   │   Supabase     │   │  Google Maps   │
    │  Routes        │   │   (DB + Auth   │   │  API           │
    │                │   │   + Storage)   │   │                │
    │  /api/gemini   │   │                │   │  Venue geocode │
    │  /api/booking  │   │  PostgreSQL    │   │  Map rendering │
    │  /api/fixtures │   │  Realtime WS   │   │  Directions    │
    │  /api/notify   │   │  Row-Level Sec │   └────────────────┘
    └────────┬───────┘   └────────┬───────┘
             │                    │
    ┌────────▼───────┐   ┌────────▼───────┐
    │  Gemini API    │   │  Razorpay      │
    │                │   │  Payment API   │
    │  AI search     │   │                │
    │  Summarizer    │   │  Orders        │
    │  Bracket AI    │   │  Webhooks      │
    └────────────────┘   └────────────────┘
             │
    ┌────────▼───────┐
    │  Notifications │
    │                │
    │  Resend Email  │
    │  Twilio SMS    │
    │  Web Push      │
    └────────────────┘
```

**Data Flow Summary:**
1. User opens the app → Next.js renders UI from the edge (fast initial load).
2. Venue data is fetched from **Supabase PostgreSQL** via React Query (cached + revalidated).
3. Map coordinates come from **Google Maps API** — plotted in real time.
4. Booking creation goes through a **Next.js API Route** which validates slot availability, creates an order in Razorpay, and inserts a pending booking in Supabase.
5. On payment success, Razorpay sends a **webhook** → booking confirmed in DB → email/SMS sent via Resend + Twilio.
6. AI features route through `/api/gemini` (server-side, API key protected) → Gemini API → response streamed to client.
7. **Supabase Realtime** pushes live updates (score changes, bracket updates) to all connected clients via WebSocket — no polling.

---

## 📁 Folder Structure

```
sportspot/
├── public/
│   ├── icons/                      # PWA icons (192, 512, maskable)
│   ├── images/                     # Static hero images, sport illustrations
│   ├── sports/                     # Animated SVG sport icons
│   └── manifest.json               # PWA manifest
│
├── prisma/
│   ├── schema.prisma               # Database schema
│   └── seed.ts                     # Seed script (venues, sports data)
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (theme, fonts, PWA)
│   │   ├── page.tsx                # Homepage / Hero
│   │   ├── discover/
│   │   │   └── page.tsx            # Venue discovery with filters
│   │   ├── venues/
│   │   │   └── [venueId]/
│   │   │       ├── page.tsx        # Venue detail page
│   │   │       └── book/
│   │   │           └── page.tsx    # Booking flow wizard
│   │   ├── tournaments/
│   │   │   ├── page.tsx            # Tournament browser
│   │   │   ├── create/
│   │   │   │   └── page.tsx        # Create tournament
│   │   │   └── [tournamentId]/
│   │   │       ├── page.tsx        # Tournament detail + bracket
│   │   │       └── manage/
│   │   │           └── page.tsx    # Organizer dashboard
│   │   ├── dashboard/
│   │   │   └── page.tsx            # Player personal dashboard
│   │   ├── venue-portal/
│   │   │   └── page.tsx            # Venue owner portal
│   │   ├── profile/
│   │   │   └── page.tsx            # User profile
│   │   └── api/
│   │       ├── booking/
│   │       │   ├── create/route.ts
│   │       │   ├── confirm/route.ts
│   │       │   └── cancel/route.ts
│   │       ├── tournaments/
│   │       │   ├── fixtures/route.ts
│   │       │   └── scores/route.ts
│   │       ├── gemini/
│   │       │   └── route.ts        # AI features proxy
│   │       ├── razorpay/
│   │       │   └── webhook/route.ts
│   │       └── notify/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── ui/                     # Reusable primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── BottomSheet.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── StarRating.tsx
│   │   │   └── Avatar.tsx
│   │   ├── discover/
│   │   │   ├── LocationSelector.tsx
│   │   │   ├── FilterPanel.tsx
│   │   │   ├── VenueCard.tsx
│   │   │   ├── VenueMap.tsx
│   │   │   ├── SportFilterChip.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── venue/
│   │   │   ├── VenueGallery.tsx
│   │   │   ├── SlotCalendar.tsx
│   │   │   ├── BookingWizard.tsx
│   │   │   ├── AmenitiesList.tsx
│   │   │   ├── ReviewCard.tsx
│   │   │   └── ReviewForm.tsx
│   │   ├── tournament/
│   │   │   ├── TournamentCard.tsx
│   │   │   ├── BracketView.tsx
│   │   │   ├── FixtureCard.tsx
│   │   │   ├── StandingsTable.tsx
│   │   │   ├── TeamCard.tsx
│   │   │   ├── ScoreEntry.tsx
│   │   │   ├── RegistrationForm.tsx
│   │   │   └── CertificatePreview.tsx
│   │   ├── dashboard/
│   │   │   ├── BookingHistoryCard.tsx
│   │   │   ├── TournamentHistoryCard.tsx
│   │   │   ├── StatsRow.tsx
│   │   │   └── FavoriteVenues.tsx
│   │   ├── venue-portal/
│   │   │   ├── AvailabilityManager.tsx
│   │   │   ├── BookingInbox.tsx
│   │   │   └── RevenueChart.tsx
│   │   ├── ai/
│   │   │   ├── AISearchBar.tsx
│   │   │   ├── ReviewSummarizer.tsx
│   │   │   └── BracketCommentary.tsx
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       ├── Sidebar.tsx
│   │       ├── BottomNav.tsx
│   │       ├── ThemeToggle.tsx
│   │       └── CustomCursor.tsx
│   │
│   ├── hooks/
│   │   ├── useVenues.ts
│   │   ├── useBooking.ts
│   │   ├── useTournament.ts
│   │   ├── useSlotAvailability.ts
│   │   ├── useNotifications.ts
│   │   ├── useCountUp.ts
│   │   └── useGeolocation.ts
│   │
│   ├── store/
│   │   ├── authStore.ts
│   │   ├── bookingStore.ts
│   │   ├── filterStore.ts
│   │   └── tournamentStore.ts
│   │
│   ├── lib/
│   │   ├── supabase.ts             # Supabase client (server + browser)
│   │   ├── prisma.ts               # Prisma client singleton
│   │   ├── gemini.ts               # Gemini API helpers
│   │   ├── razorpay.ts             # Razorpay client helpers
│   │   ├── fixtures.ts             # Fixture generation algorithms
│   │   ├── notifications.ts        # Email/SMS/push helpers
│   │   └── utils.ts
│   │
│   ├── types/
│   │   ├── venue.ts
│   │   ├── booking.ts
│   │   ├── tournament.ts
│   │   └── user.ts
│   │
│   └── styles/
│       ├── globals.css             # CSS variables + base
│       └── animations.css          # Keyframe definitions
│
├── .env.local                      # Environment variables
├── next.config.ts                  # Next.js + PWA config
├── tailwind.config.ts
├── prisma/schema.prisma
└── package.json
```

---

## 🔄 How It Works

### Step-by-Step User Journey

#### Venue Discovery & Booking

```
User opens SportSpot
      ↓
Selects location zone: "Andheri"
      ↓
Venue cards load (fetched from Supabase, cached by React Query)
Map view shows pins for all venues in Andheri
      ↓
User filters: Sport = Football, Price = under ₹800/hr
      ↓
3 turfs match → User clicks "KickOff Arena, Andheri West"
      ↓
Venue detail page opens:
  → Gallery of 6 photos
  → Sports: Football (₹700/hr), Cricket (₹600/hr)
  → Amenities: Floodlights ✓, Parking ✓, Changing Room ✓
  → Rating: 4.6 ★ (42 reviews)
      ↓
User clicks "Book Now" → Selects: Football, Saturday 6 PM – 8 PM
Slot check: Available ✓
Total: ₹700 × 2 hrs = ₹1,400
      ↓
Payment via Razorpay (UPI) → Success
      ↓
Booking ID: SPT-20241102-8821
Email + SMS confirmation sent
QR code generated for venue entry
```

#### Tournament Creation & Management

```
Organizer clicks "Create Tournament"
      ↓
Fills form:
  Name: "Andheri Premier Football League – Season 3"
  Sport: Football | Format: Round Robin + Knockout
  Teams: 8 | Entry Fee: ₹2,000/team
  Dates: Nov 15 – Dec 10 | Venue: KickOff Arena
      ↓
Registration link generated → shared with teams
8 teams register and pay entry fee
      ↓
Organizer clicks "Generate Fixtures"
System creates Round Robin fixtures (28 matches) + Knockout draw
Automated notifications sent to all team captains with schedules
      ↓
Match Day: Organizer enters scores after each match
Standings table auto-updates
Top 4 teams advance to Knockout bracket
      ↓
Final played → Winner crowned
AI generates match summary + prediction commentary
Certificates auto-generated for Winner, Runner-up, and all participants
```

#### AI Venue Search

```
User types: "I need a badminton court in Navi Mumbai on Sunday morning under ₹400"
      ↓
Request sent to /api/gemini (server-side)
Gemini parses: sport=badminton, location=Navi Mumbai, day=Sunday, time=morning, budget=₹400
      ↓
Venue query runs against Supabase with parsed parameters
      ↓
AI response: "Here are the top 3 badminton courts matching your search..."
Each suggestion includes venue name, price, distance, and a one-line AI reasoning
```

---

## ⚙️ Installation & Setup

### Prerequisites

- Node.js >= 18.x
- PostgreSQL (or Supabase account)
- Google Maps API Key
- Razorpay Account (Key ID + Secret)
- Google Gemini API Key
- Twilio Account (optional, for SMS)
- Resend Account (for email)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/sportspot-mumbai.git
cd sportspot-mumbai
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Database (Prisma)
DATABASE_URL=postgresql://postgres:password@db.supabase.co:5432/postgres

# Google APIs
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
GEMINI_API_KEY=your_gemini_api_key

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_razorpay_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxx

# Notifications
RESEND_API_KEY=re_xxxxxxxxxxxx
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1234567890

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=SportSpot Mumbai
```

### 4. Set Up the Database

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed with sample venues and data
npx prisma db seed
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Build for Production

```bash
npm run build
npm start
```

### 7. Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

Add all environment variables in the Vercel project dashboard.

---

## 🔮 Future Enhancements

### AI Improvements
- **Photo-based Venue Recognition**: Upload a photo of a turf and AI identifies the sport and quality.
- **AI Referee for Score Disputes**: AI mediates disputed scores based on submitted evidence.
- **Match Prediction Engine**: ML model predicts match outcomes based on team history.
- **Smart Fixture Optimizer**: AI schedules fixtures to minimize travel distance for all teams.

### Platform Expansion
- **Mobile Apps**: React Native apps for iOS and Android.
- **Multi-City Expansion**: Beyond Mumbai — Pune, Bangalore, Delhi, Hyderabad.
- **Live Scoring App**: Dedicated mobile app for real-time score entry with offline support.
- **Video Highlights Integration**: Venues with cameras can upload short match clips linked to bookings.

### Business Features
- **Subscription Plans**: Venue owners on monthly plans for premium listing and analytics.
- **Corporate Packages**: Bulk booking credits for companies (for team-building sports days).
- **Coaching Directory**: Sports coaches can list themselves and accept bookings via SportSpot.
- **Equipment Rental**: Venues can list rental equipment (jerseys, balls, shoes) alongside their booking.

### Social & Community
- **Teams & Squads**: Create persistent teams, invite members, track team ELO ranking.
- **Open Match Board**: Post a "looking for players" notice — fill empty team spots.
- **League Seasons**: Organize annual multi-sport city leagues with official rankings.
- **Social Feed**: Players share match moments, tournament victories, venue reviews.

### Performance & Scale
- **CDN image optimization** for venue photos (Cloudflare Images).
- **Edge caching** for frequently-accessed venue and fixture data.
- **Redis** for slot availability session locks (prevent double-booking under high concurrency).
- **Background Jobs** (BullMQ) for notification queuing, certificate generation, report emails.

---

## 🧗 Challenges & Solutions

| Challenge | Solution |
|---|---|
| **Double booking race condition** | Slot availability check + booking creation happens inside a **Supabase database transaction** with row-level locking. Redis distributed lock added at scale. |
| **Real-time bracket updates** | **Supabase Realtime** WebSocket subscriptions — all clients viewing a tournament bracket receive live updates when scores are entered. No polling required. |
| **Auto fixture generation** for varied team counts | Implemented separate algorithms for Round Robin (`n*(n-1)/2` fixtures), Knockout (power-of-2 byes), and Double Elimination. Handles odd team numbers with automatic byes. |
| **Razorpay webhook reliability** | All webhook events processed with **idempotency keys** — duplicate webhook delivery is safely ignored. Booking state machine (Pending → Confirmed → Cancelled) enforces valid transitions. |
| **Venue photo storage at scale** | Photos uploaded directly to **Supabase Storage** with pre-signed URLs. CDN delivery via Supabase's built-in CDN. Images resized at upload (thumbnail + full) using Sharp. |
| **Gemini API rate limits for AI search** | Client-side request debouncing (500ms) + server-side request queue. Frequent identical queries cached in Supabase with a 1-hour TTL. |
| **Mumbai-specific venue data accuracy** | Seeded with 100+ real Mumbai venues across all zones. Venue owners verify and maintain their own listings via the portal (self-serve + moderation). |
| **Certificate PDF generation at scale** | Certificates generated on-demand using jsPDF with a pre-built template. Generated PDFs cached in Supabase Storage by tournament ID + participant ID. |
| **Mobile booking UX complexity** | Multi-step booking wizard broken into 3 simple screens. Each step validates before proceeding. State persisted in Zustand — user can go back without losing selections. |

---

## 🎬 Demo / Usage

### Example 1 — Find & Book a Turf

```
Search: "Football turf in Navi Mumbai, Saturday evening"

Results:
  1. AstroTurf Arena, Vashi
     ⭐ 4.8 (67 reviews) | ₹750/hr | 2.1km away
     ✅ Saturday 6 PM – 9 PM: Available

  2. Kickzone Sports Hub, Kharghar
     ⭐ 4.5 (44 reviews) | ₹600/hr | 4.3km away
     ✅ Saturday 5 PM – 8 PM: Available

User books AstroTurf Arena → Saturday 6 PM – 8 PM → ₹1,500
Booking ID: SPT-20241109-4472 ✅
Confirmation sent to user@email.com + +91-98765XXXXX
```

### Example 2 — Tournament Bracket (8-Team Knockout)

```
Teams: RedWolves, Blue Eagles, FC Navi, City Kicks,
       Andheri FC, The Saints, Goal Getters, Phoenix FC

Quarterfinals:
  QF1: RedWolves 3 – 1 Phoenix FC     → RedWolves advance
  QF2: Blue Eagles 2 – 2 City Kicks   → City Kicks (pens 4-3)
  QF3: FC Navi 4 – 0 Goal Getters     → FC Navi advance
  QF4: Andheri FC 1 – 2 The Saints    → The Saints advance

Semifinals:
  SF1: RedWolves vs City Kicks  [Nov 23, 5 PM]
  SF2: FC Navi vs The Saints    [Nov 23, 7 PM]

AI Commentary: "RedWolves enter the semis in electric form after
a dominant QF win. City Kicks will rely on their penalty shootout
nerves of steel — expect a tight affair at KickOff Arena."
```

### Example 3 — Venue Owner Revenue Dashboard

```
KickOff Arena, Andheri West — October 2024

Total Bookings:    87
Revenue:           ₹1,24,500
Peak Hours:        6 PM – 9 PM (Weekdays), 7 AM – 10 AM (Weekends)
Top Sport:         Football (62%), Badminton (28%), Cricket (10%)
Avg Rating:        4.7 ★
Cancellation Rate: 4.6%
New Reviews:       18 (avg 4.8 ★)
```

---

## 👥 Contributors

| Name | Role |
|---|---|
| [Your Name] | Full-Stack Developer, Product Designer, Project Lead |

---

## 📄 License

MIT License — Free to use, modify, and distribute with attribution.

---

<div align="center">

**Built with 💚 for Mumbai's sports community.**

*SportSpot Mumbai — Find. Book. Play.*

[Live Demo](#) · [Report Bug](#) · [Request Feature](#)

</div>
