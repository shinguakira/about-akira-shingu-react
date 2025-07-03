# About Akira Shingu - Personal Portfolio Website

## Project Overview
This is a personal portfolio website for Akira Shingu built using modern web technologies. The site features a responsive design with dark/light mode support and multilingual capabilities (English/Japanese).

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
├── .github/            # GitHub workflows and configurations
├── app/                # Next.js App Router pages
│   ├── (localized)/    # Localization wrapper with [locale] parameter
│   ├── about/          # About page routes
│   ├── api/            # API routes (including contact form handling)
│   ├── articles/       # Articles/blog section
│   ├── certifications/ # Professional certifications section
│   ├── contact/        # Contact page
│   ├── faq/            # FAQ section
│   └── projects/       # Projects showcase
├── components/         # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Other specialized components
├── constants/          # Constants and static data
├── contexts/           # React contexts (e.g., language, theme)
├── lib/                # Utility functions
├── public/             # Static assets
├── types/              # TypeScript type definitions
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
