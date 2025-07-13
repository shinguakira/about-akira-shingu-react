
# about-akira-shingu-react

This is a portfolio website for Akira Shingu, built with Next.js and TypeScript.

## Certification API Integration

The portfolio showcases professional certifications dynamically fetched from an external API with fallback to static data:

### Data Architecture
- **Dynamic Data Source**: Integration with `https://portfolio-api-ten-delta.vercel.app/api/certifications`
- **Language Support**: API requests include locale parameter (`lang=en` or `lang=ja`)
- **Weekly Cache Strategy**: Data refreshed once per week (604800 seconds)
- **Static Fallback**: Local certification data used if API request fails

### Next.js Implementation
- **Server Components**: All data fetching occurs in server components
- **Props Passing**: Server fetches data and passes to client components
- **Static Generation**: Pages pre-rendered at build time for all locales
- **Force-Static Directive**: Using `dynamic = 'force-static'` for optimal performance

### UI Components
- **Layout Switcher**: Four distinct certification card styles (classic, modern, premium, special)
- **Special Edition Default**: Special layout set as default viewing option
- **Client-side Switching**: Layout changes handled client-side without page reload
- **Responsive Design**: All layouts fully responsive using Tailwind CSS

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Languages:** [TypeScript](https://www.typescriptlang.org/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/)
- **Internationalization:** [i18next](https://www.i18next.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Markdown:** [React Markdown](https://github.com/remarkjs/react-markdown)
- **Email:** [Nodemailer](https://nodemailer.com/)
- **Theming:** [Next Themes](https://github.com/pacocoursey/next-themes)
- **Linting & Formatting:** [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## Project Structure

- `app/`: Contains the main application logic, including pages and API routes.
- `components/`: Reusable React components.
- `constants/`: Constant values used throughout the application.
- `contexts/`: React contexts for state management.
- `lib/`: Utility functions.
- `public/`: Static assets like images and locales.
- `types/`: TypeScript type definitions.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the codebase for errors.
- `npm run lint:fix`: Automatically fixes linting errors.
- `npm run format`: Formats the code using Prettier.
- `npm run check-format`: Checks for formatting issues.
