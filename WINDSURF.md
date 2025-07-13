# About Akira Shingu - Personal Portfolio Website

## Project Overview
This is a personal portfolio website for Akira Shingu built using modern web technologies. The site features a responsive design with dark/light mode support and multilingual capabilities (English/Japanese).

## Next.js Development Patterns

### TypeScript Integration
- **Implicit Type System**: Types are defined without explicit `export` keywords and imported implicitly where needed
- **TypeScript Configuration**: Optimized for Next.js App Router with proper module resolution
- **Type Safety**: Ensuring type safety across components without verbose type annotations

### Data Fetching Strategy
- **Server-First Approach**: Data fetching happens in server components whenever possible
- **No Client-Side API Calls**: Avoiding `useEffect` hooks for API calls
- **Props Passing Pattern**: Server components fetch data and pass it to client components
- **Revalidation Strategy**: Using Next.js built-in data revalidation instead of client-side polling

### API Architecture & Services
- **Unified Service Layer**: Generic `portfolioApi.ts` service for all external data endpoints
- **Type-Safe Generics**: Using TypeScript generics with `fetchFromPortfolioApi<T>` for type safety
- **Service Architecture**: Specialized helper functions built on the core fetching logic
- **Abstracted Implementation**: API details hidden behind a clean service interface

### Technical Implementation
- **Static Generation Strategy**: Leveraging App Router's advanced static generation features
- **Cache Management**: Smart handling of cache directives to avoid conflicts with revalidation
- **Error Handling**: Graceful fallback to local data when API calls fail
- **Environment Compatibility**: Services designed to work in both development and production

## Tech Stack

### Core Technologies
- **Framework**: Next.js 15.0.2
- **UI Library**: React 19.0.0 (RC version)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **Internationalization**: next-i18next
- **Theme Switching**: next-themes

### UI Components
- Custom UI components built on top of shadcn principles
- Lucide React icons
- Various Radix UI primitives for accessible components

### Additional Libraries
- date-fns for date formatting
- react-markdown for markdown rendering
- nodemailer for contact form functionality

## Project Structure

```
„¥„Ÿ„Ÿ .github/            # GitHub workflows and configurations
„¥„Ÿ„Ÿ app/                # Next.js App Router pages
„    „¥„Ÿ„Ÿ (localized)/    # Localization wrapper with [locale] parameter
„    „¥„Ÿ„Ÿ about/          # About page routes
„    „¥„Ÿ„Ÿ api/            # API routes (including contact form handling)
„    „¥„Ÿ„Ÿ articles/       # Articles/blog section
„    „¥„Ÿ„Ÿ certifications/ # Professional certifications section
„    „¥„Ÿ„Ÿ contact/        # Contact page
„    „¥„Ÿ„Ÿ faq/            # FAQ section
„    „¤„Ÿ„Ÿ projects/       # Projects showcase
„¥„Ÿ„Ÿ components/         # React components
„    „¥„Ÿ„Ÿ ui/             # Reusable UI components
„    „¤„Ÿ„Ÿ ...             # Other specialized components
„¥„Ÿ„Ÿ constants/          # Constants and static data
„¥„Ÿ„Ÿ contexts/           # React contexts (e.g., language, theme)
„¥„Ÿ„Ÿ lib/                # Utility functions
„¥„Ÿ„Ÿ public/             # Static assets
„¥„Ÿ„Ÿ types/              # TypeScript type definitions
```

## Key Features

1. **Multilingual Support**: Fully supports English and Japanese with dedicated locale routes
2. **Theme Switching**: Dynamic light/dark mode with smooth transitions
3. **Responsive Design**: Mobile-first approach with adaptive layouts
4. **Dynamic Certifications Display**: Multiple layout options for certification items
5. **Contact Form**: Server-side form processing with email notifications
6. **SEO Optimized**: Proper metadata handling for better search engine visibility

## Deployment Considerations

### Environment Variables
The application may require the following environment variables to be set:

```
# Email functionality for contact form
EMAIL_SERVER=
EMAIL_PORT=
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_FROM=
EMAIL_TO=
```

### Build Commands
- Development: `npm run dev`
- Production build: `npm run build`
- Start production server: `npm start`
- Linting: `npm run lint` or `npm run lint:fix`
- Format code: `npm run format`

### Deployment Target
This Next.js application is optimized for deployment on Vercel or similar platforms that support Next.js natively.

## Additional Notes

- The project uses the new Next.js App Router architecture
- CSS is managed through Tailwind with some custom utilities
- Components follow a modular design pattern for better maintainability
- State management is handled through React contexts where appropriate
