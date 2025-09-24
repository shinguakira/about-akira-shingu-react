# Akira Shingu Portfolio Website - GitHub Copilot Instructions

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Prerequisites and Setup

- Install pnpm globally: `npm install -g pnpm`
- Install dependencies: `pnpm install` -- takes 25 seconds. NEVER CANCEL.
- Create environment file: `cp .env.example .env.local` (optional - app works without environment variables)

### Core Development Workflow

- Start development server: `pnpm run dev` -- starts in 1.4 seconds
  - Application runs at http://localhost:3000
  - Automatic redirect to http://localhost:3000/en (default English locale)
- Build for production: `pnpm run build` -- takes 26 seconds. NEVER CANCEL. Set timeout to 60+ minutes.
  - Expect network errors for external API calls during build (normal behavior)
  - Build succeeds despite API errors due to graceful fallback to local data
- Start production server: `pnpm run start`

### Code Quality Commands - ALWAYS RUN BEFORE COMMITTING

Execute these commands in sequence before finalizing any code changes:

```bash
# Check linting issues
pnpm run lint

# Format code
pnpm run format

# Verify build succeeds
pnpm run build
```

Command timings:

- `pnpm run lint` -- takes 3 seconds, shows warnings but passes
- `pnpm run lint:fix` -- BROKEN: ESLint config issue with JS files. Use `pnpm run lint` instead
- `pnpm run format` -- takes 4 seconds to format all files
- `pnpm run check-format` -- takes 4 seconds to check formatting

### Manual Validation Requirements

After making changes, ALWAYS test the application manually:

1. Start development server: `pnpm run dev`
2. Navigate to http://localhost:3000 (redirects to /en)
3. Test navigation between pages: Home, About, Certifications, Projects, Articles, FAQ, Contact
4. Test language switching (EN/JA toggle in top navigation)
5. Verify pages load correctly with local fallback data when API unavailable
6. Test responsive design by resizing browser window

## Project Architecture

### Next.js App Router Structure

```
app/
├── (localized)/[locale]/     # Internationalized routes (en/ja)
│   ├── about/               # About page with work history and skills
│   ├── articles/            # Articles/blog section
│   ├── certifications/      # Professional certifications showcase
│   ├── contact/             # Contact form
│   ├── faq/                 # FAQ section
│   ├── projects/            # Projects showcase
│   └── layout.tsx           # Localized layout wrapper
├── api/contact/             # Contact form API endpoint
├── globals.css              # Global styles
├── layout.tsx               # Root layout
└── page.tsx                 # Root page (redirects to localized route)
```

### Key Components

- `components/ui/` -- Reusable UI components built on Shadcn/UI principles
- `components/analytics/` -- Google Tag Manager and Microsoft Clarity integration
- `constants/` -- Static data (certifications, projects, work experience, skills)
- `services/portfolioApi.ts` -- External API service with graceful fallback
- `contexts/` -- React contexts for language and user role management
- `middleware.ts` -- Internationalization and role-based routing

### Data Fetching Strategy

- **Server-First**: All data fetching happens in server components
- **External API**: Fetches from https://portfolio-api-ten-delta.vercel.app/api with weekly cache (604800 seconds)
- **Graceful Fallback**: Uses local constants when API unavailable
- **No Client-Side API Calls**: Avoids useEffect hooks for data fetching
- **Props Passing**: Server components fetch data and pass to client components

## Technology Stack

### Core Technologies

- **Framework**: Next.js 15.0.2 with App Router
- **Language**: TypeScript 5.6.3
- **Runtime**: Node.js 20.19.5
- **Package Manager**: pnpm (required)
- **Styling**: Tailwind CSS 3.4.14
- **UI Components**: Radix UI primitives with custom styling

### Build Tools & Quality

- **Linting**: ESLint with TypeScript and Next.js rules
- **Formatting**: Prettier with Tailwind CSS plugin
- **Type Checking**: TypeScript strict mode enabled

### Feature Libraries

- **Internationalization**: next-i18next (English/Japanese)
- **Icons**: Lucide React + custom SVG components
- **Theme**: next-themes for dark/light mode
- **Email**: Nodemailer for contact form
- **Markdown**: react-markdown for content rendering
- **Analytics**: Google Tag Manager + Microsoft Clarity

## Common Development Tasks

### Adding New Pages

1. Create page in `app/(localized)/[locale]/new-page/page.tsx`
2. Add client component in `app/(localized)/[locale]/new-page/client-page.tsx`
3. Update navigation in `components/ui/nav-bar.tsx`
4. Add translations to locale files in `public/locales/`

### Modifying Styles

- Use Tailwind CSS utility classes
- Follow existing patterns in `components/ui/`
- Check `tailwind.config.ts` for custom theme configuration
- Test responsive design on mobile/tablet/desktop

### API Integration

- Modify `services/portfolioApi.ts` for new endpoints
- Always provide local fallback data in `constants/`
- Test both API success and failure scenarios
- Use TypeScript generics for type safety

### Environment Variables

Optional environment variables (app works without them):

```bash
# Analytics (optional)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx

# Email configuration (optional)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password

# External API override (optional)
NEXT_PUBLIC_VERCEL_PORTFOLIO_API_URL=https://your-api.vercel.app/api
```

## Known Issues and Workarounds

### Network Errors During Build

- External API calls fail in isolated environments (expected)
- Application gracefully falls back to local data
- Build succeeds despite network errors
- DO NOT attempt to fix network connectivity - it's by design

### Linting Warnings

- Project has intentional warnings for unused variables and TypeScript any types
- These are non-blocking and part of active development
- Focus on errors, not warnings, unless specifically addressing them

### Certification Display Bug

- Certifications page may have navigation issues in some environments
- This is a known issue with the certification role system
- Test other pages if certifications page fails to load

## CI/CD Integration

### GitHub Actions

- OpenAI Code Review runs on PRs to master/devin-develop branches
- Auto-assignment workflows for reviewers
- Linting and formatting checked in CI

### Deployment

- Optimized for Vercel deployment
- Static generation with App Router
- Environment variables configured in deployment platform
- Build artifacts in `.next/` directory (ignored by git)

## Debugging and Troubleshooting

### Common Error Patterns

1. **Build Failures**: Run `pnpm run lint:fix && pnpm run format` then rebuild
2. **TypeScript Errors**: Check `tsconfig.json` path mapping for @/\* imports
3. **API Errors**: Verify fallback data exists in constants/ directory
4. **Styling Issues**: Ensure Tailwind classes are valid and PostCSS processes correctly
5. **Routing Issues**: Check middleware.ts for locale/role-based redirects

### Development Server Issues

- Clear `.next/` directory if experiencing caching issues
- Restart server after middleware changes
- Check console for client-side errors
- Verify Node.js version compatibility (20.19.5 tested)

### Performance Monitoring

- Monitor bundle sizes in build output
- Check Core Web Vitals during manual testing
- Verify image optimization for better LCP scores
- Test language switching performance

---

**CRITICAL REMINDERS:**

- NEVER CANCEL build commands - they may take 40+ seconds
- ALWAYS run code quality workflow before committing
- ALWAYS manually test functionality after changes
- External API failures are expected and handled gracefully
- Use pnpm, not npm or yarn, for all package management
