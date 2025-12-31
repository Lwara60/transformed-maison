import { SpeedInsights } from '@vercel/speed-insights/react'
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Welcome to Transformed Maison</h1>
          <p>Your project is now integrated with Vercel Speed Insights</p>
        </header>
        
        <main>
          <section>
            <h2>What is Speed Insights?</h2>
            <p>
              Vercel Speed Insights provides real user monitoring (RUM) data about your website&apos;s performance,
              helping you understand how your site performs for your actual users.
            </p>
          </section>

          <section>
            <h2>Getting Started</h2>
            <ul>
              <li>Deploy this application to Vercel</li>
              <li>Enable Speed Insights in your Vercel project settings</li>
              <li>Monitor real user metrics in the dashboard</li>
            </ul>
          </section>

          <section>
            <h2>Key Metrics</h2>
            <ul>
              <li><strong>Web Vitals:</strong> Core Web Vitals for user experience</li>
              <li><strong>Performance:</strong> Page load and interaction times</li>
              <li><strong>User Experience:</strong> Real data from actual visitors</li>
            </ul>
          </section>
        </main>

        <footer>
          <p>Speed Insights tracking is active on this page</p>
        </footer>
      </div>

      <SpeedInsights />
    </>
  )
}

export default App
