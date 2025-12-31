import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div>
      <h1>Welcome to Transformed Maison</h1>
      <p>This application uses Vercel Web Analytics to track user interactions.</p>
      <Analytics />
    </div>
  );
}
