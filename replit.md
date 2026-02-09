# replit.md

## Overview

ExpressLaundry is a full-stack web application for a laundry service business based in Nairobi, Kenya. It serves as a marketing website with booking functionality, allowing customers to browse services, view pricing, submit booking requests, and send contact messages. The app features a modern, responsive design with smooth animations and a professional blue/eco-green color scheme.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled via Vite
- **Routing**: Wouter (lightweight client-side router) with pages: Home, About, Services, Pricing, Contact, and 404
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **State Management**: TanStack React Query for server state (mutations for bookings and messages)
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Animations**: Framer Motion for scroll animations and page transitions
- **Styling**: Tailwind CSS with CSS variables for theming, custom fonts (Plus Jakarta Sans for headings, Inter for body)
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via tsx in development
- **API Design**: RESTful with a shared route contract (`shared/routes.ts`) that defines paths, methods, input schemas, and response types using Zod
- **Two API endpoints**:
  - `POST /api/bookings` — Create a laundry booking
  - `POST /api/contact` — Submit a contact message
- **Build**: esbuild for server bundling, Vite for client bundling. Production output goes to `dist/`

### Data Storage
- **Database**: PostgreSQL (required via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema** (`shared/schema.ts`): Two tables:
  - `bookings` — id, name, email, phone, address, pickupDate, serviceType, notes, status (default "pending"), createdAt
  - `messages` — id, name, email, phone, message, createdAt
- **Migrations**: Managed via `drizzle-kit push` (schema push approach, not migration files)
- **Storage Layer**: `server/storage.ts` implements `IStorage` interface with `DatabaseStorage` class using Drizzle

### Shared Code
- `shared/schema.ts` — Database schema definitions and Zod insert schemas, shared between client and server
- `shared/routes.ts` — API route contract with paths, methods, and input/output schemas

### Development vs Production
- **Development**: Vite dev server runs as middleware on the Express server with HMR
- **Production**: Client is pre-built to `dist/public`, server is bundled to `dist/index.cjs`, Express serves static files with SPA fallback

## External Dependencies

### Database
- **PostgreSQL** — Primary data store, connected via `DATABASE_URL` environment variable using `pg` Pool

### Key NPM Packages
- **drizzle-orm** + **drizzle-kit** — Database ORM and schema management
- **express** v5 — HTTP server
- **@tanstack/react-query** — Client-side data fetching/mutations
- **framer-motion** — Animation library
- **react-hook-form** + **zod** — Form handling and validation
- **shadcn/ui** components (Radix UI primitives) — Pre-built accessible UI components
- **wouter** — Client-side routing
- **connect-pg-simple** — PostgreSQL session store (available but not actively used in current routes)

### External Services
- **WhatsApp API** — Floating chat button linking to `wa.me/254700123456` (placeholder number)
- **Google Fonts** — Plus Jakarta Sans, Inter, DM Sans, Fira Code, Geist Mono
- **Unsplash/Pixabay** — External image URLs used in section components

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay in development
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — Dev-only Replit integrations