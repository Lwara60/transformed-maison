# Transformed Maison

A modern React application with Vercel Speed Insights integration for real user monitoring and performance analytics.

## Features

- ⚡ Built with Vite for fast development and optimized builds
- 📊 Integrated with Vercel Speed Insights for real user monitoring
- ♿ Accessible and responsive design
- 🎨 Modern styling with CSS3
- 🔍 ESLint configuration for code quality

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

### Build

Create a production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Preview

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
# or
bun preview
```

### Linting

Check code quality:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## Vercel Speed Insights Integration

This project includes Vercel Speed Insights for real user monitoring (RUM). The `SpeedInsights` component is integrated in the main App component.

### Enabling Speed Insights

1. Deploy this application to Vercel
2. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
3. Select your project and navigate to the **Speed Insights** tab
4. Click **Enable** to start collecting performance metrics

### Viewing Metrics

Once enabled and after real users visit your site:

1. Return to the Speed Insights tab in your project dashboard
2. View real user metrics including:
   - Core Web Vitals
   - Page Load Times
   - User Experience Metrics
   - Geographic Performance Data

### How It Works

The Speed Insights component automatically:
- Collects performance metrics from real users
- Sends data to Vercel's secure infrastructure
- Provides insights without impacting performance
- Respects user privacy

For more information, visit the [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights).

## Learn More

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

## License

MIT
