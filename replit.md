# KTL Website - Kattali Textile Ltd.

## Overview

This is a website for Kattali Textile Ltd. (KTL), a Bangladesh-based apparel manufacturer serving export buyers in Canada and the USA. The site runs on a modern full-stack architecture with React frontend, Express backend, and PostgreSQL database using Drizzle ORM. The website features company information, certifications, client details, careers, and investor information for the textile manufacturing business.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management and data fetching
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **Forms**: React Hook Form with Zod validation for robust form handling

### Backend Architecture  
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for type safety and modern JavaScript features
- **API Structure**: RESTful API design with centralized route registration
- **Error Handling**: Global error middleware with structured error responses
- **Development**: TSX for TypeScript execution and hot reloading

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon serverless PostgreSQL for cloud database hosting
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Development Storage**: In-memory storage fallback for development environments

### Authentication and Authorization
- **Session Management**: Prepared for connect-pg-simple session store with PostgreSQL backend
- **User Schema**: Basic user model with username/password authentication ready for implementation

### Component Architecture
- **Design System**: shadcn/ui components with Radix UI primitives for accessibility
- **Layout**: Responsive design with mobile-first approach using Tailwind breakpoints
- **SEO**: React Helmet Async for dynamic meta tags and structured data
- **Reusability**: Modular component structure with shared UI components and page layouts

## External Dependencies

### Third-Party Services
- **Email Service**: EmailJS for contact form submissions and newsletter subscriptions
- **Analytics**: Prepared for Google Analytics integration via gtag
- **Development Tools**: Replit integration with cartographer and runtime error overlay

### UI and Styling
- **Component Library**: Radix UI primitives for accessible, unstyled components
- **Icons**: Lucide React for consistent iconography
- **Styling**: Tailwind CSS with CSS variables for theming
- **Utilities**: clsx and tailwind-merge for conditional styling

### Database and ORM
- **ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL for scalable cloud database
- **Validation**: Drizzle-Zod integration for schema validation

### Development and Build Tools
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript setup with strict mode enabled
- **Bundling**: esbuild for server-side bundling in production
- **PostCSS**: PostCSS with Tailwind and Autoprefixer for CSS processing