import { useState, useEffect } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import { Auth } from './components/Auth'
import { Notes } from './components/Notes'
import './App.css'

function AppContent() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <header className="header">
        <h1>React + Supabase</h1>
        <div className={`status ${user ? 'connected' : 'disconnected'}`}>
          <span className="status-indicator"></span>
          {user ? 'Authenticated' : 'Not Signed In'}
        </div>
      </header>

      <main className="main">
        <div className="app-grid">
          <div className="card">
            <Auth />
          </div>
          {user && (
            <div className="card">
              <Notes />
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <p>Built with React, Vite, and Supabase</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
