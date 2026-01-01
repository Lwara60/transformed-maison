import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    checkConnection()
  }, [])

  const checkConnection = async () => {
    try {
      const { error } = await supabase.from('_health').select('*').limit(1)
      if (!error || error.code === '42P01') {
        setConnected(true)
      }
    } catch (err) {
      console.error('Connection check failed:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Connecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="header">
        <h1>React + Supabase</h1>
        <div className={`status ${connected ? 'connected' : 'disconnected'}`}>
          <span className="status-indicator"></span>
          {connected ? 'Connected to Supabase' : 'Not Connected'}
        </div>
      </header>

      <main className="main">
        <div className="card">
          <h2>Welcome to Your App</h2>
          <p>Your React application is ready with Supabase integration.</p>

          <div className="features">
            <div className="feature">
              <h3>⚡ Vite</h3>
              <p>Lightning fast development with hot module replacement</p>
            </div>
            <div className="feature">
              <h3>⚛️ React 18</h3>
              <p>Latest React features and concurrent rendering</p>
            </div>
            <div className="feature">
              <h3>🗄️ Supabase</h3>
              <p>Backend as a service with PostgreSQL database</p>
            </div>
          </div>

          <div className="actions">
            <button className="btn btn-primary" onClick={() => alert('Start building your app!')}>
              Get Started
            </button>
            <a
              href="https://supabase.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Docs
            </a>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Built with React, Vite, and Supabase</p>
      </footer>
    </div>
  )
}

export default App
