# Shanghai Traders - Textile Machinery Importers

## Overview

Shanghai Traders is a modern web application built for a textile machinery import business specializing in bringing Chinese textile equipment to Pakistan. The application serves as a company website showcasing products, services, and contact information with a focus on the textile industry.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom industrial color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development Server**: Hot Module Replacement (HMR) via Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with type-safe database operations
- **Connection**: Neon Database serverless driver
- **Session Storage**: PostgreSQL-based session store (connect-pg-simple)
- **Development Storage**: In-memory storage implementation for local development

## Key Components

### User Interface
- **Design System**: Custom industrial-themed design with neutral color palette
- **Component Library**: Comprehensive UI components (buttons, forms, navigation, etc.)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Typography**: Inter font family for modern, clean appearance

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Validation**: Zod integration for runtime type checking
- **Migrations**: Drizzle Kit for database schema management

### Application Structure
- **Monorepo Layout**: Shared types and schemas between client and server
- **Component Organization**: Modular component structure with clear separation
- **Path Aliases**: TypeScript path mapping for clean imports

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **Server Processing**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Type-safe data flows back to React components
5. **State Management**: React Query handles caching, background updates, and error states

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL-compatible serverless)
- **Authentication**: Session-based authentication with PostgreSQL storage
- **UI Framework**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS for utility-first styling
- **Development**: Replit-specific plugins for enhanced development experience

### Build and Development Tools
- **TypeScript**: Full type safety across the stack
- **ESBuild**: Fast bundling for production server build
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Vite**: Modern build tool with fast HMR

## Deployment Strategy

### Production Build
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: ESBuild bundles Express server to `dist/index.js`
- **Static Assets**: Client build serves as static files in production

### Environment Configuration
- **Development**: Hot reloading with Vite dev server
- **Production**: Node.js server serves built client and API routes
- **Database**: Environment-based PostgreSQL connection via DATABASE_URL

### Replit Integration
- **Development Banner**: Automatic development environment detection
- **Runtime Error Overlay**: Enhanced error reporting in development
- **Cartographer**: Replit-specific development tools integration

## Recent Changes
- **July 07, 2025**: Complete redesign with dark navy theme and glassmorphism effects
- **Advanced Features Added**:
  - Product detail pages with image galleries and specifications
  - Floating WhatsApp, email, and phone buttons with animations
  - Newsletter popup with delay and localStorage
  - Animated counters for statistics
  - Dark mode toggle with comprehensive theming
  - Particle background effects with connecting lines
  - FAQ section with collapsible cards
  - Enhanced accessibility with reduced motion support
  - Product filtering with smooth transitions
  - Comprehensive glassmorphism effects throughout

## Elite Textile Industry Design System
- **Color Palette**: Rich deep navy (#0A1F2D) with industrial gold gradient (#E9C46A → #F4A261)
- **Typography**: Sora and IBM Plex Sans for precision and elegance
- **Glassmorphism**: Elite cards with enhanced blur effects and gold borders
- **Button System**: Rounded minimal buttons with soft shadows and gradient fills
- **Navigation**: Semi-transparent glass-style navbar with textile-gold hover states

## Immersive Motion & Layering Features
- **3D Tilt Effects**: Card-3d hover animations with perspective transforms
- **Glass Sheen Animations**: Swipe reflection effects on product cards
- **Scroll Snap Experience**: Apple-style section snapping navigation
- **Morphing Blob Backgrounds**: Animated organic shapes with color gradients
- **Textile-Inspired Animations**: Thread loops, wave patterns, and floating shapes
- **Confetti Burst**: CTA click celebrations with particle animations
- **Button Ripple Effects**: Material Design-style click feedback
- **Light Pulse CTAs**: Glowing animation rings on primary buttons
- **Elastic Animations**: Spring-based button press responses
- **Progress Bars**: Scroll-based progress indication at top
- **Custom Cursor**: Interactive cursor with hover magnification
- **Particle Mouse Trail**: Golden particle trail following cursor movement
- **Live Counter Widget**: Real-time visitor statistics with location
- **Trust Badges**: Premium certification badges with hover effects
- **Creative Textile Visual**: Custom SVG textile department imagery with animated machinery
- **Glow Text Effects**: Elegant golden text shadows for headings
- **Radial Overlays**: Gradient depth effects throughout sections

## Changelog
- July 07, 2025. Initial setup
- July 07, 2025. Major redesign with modern features and advanced animations

## User Preferences

Preferred communication style: Simple, everyday language.