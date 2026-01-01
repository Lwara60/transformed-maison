import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'
import '../styles/Notes.css'

export function Notes() {
  const { user } = useAuth()
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (user) {
      fetchNotes()
    }
  }, [user])

  const fetchNotes = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setNotes(data || [])
    } catch (error) {
      console.error('Error fetching notes:', error)
    } finally {
      setLoading(false)
    }
  }

  const createNote = async (e) => {
    e.preventDefault()
    if (!title.trim()) return

    try {
      setSubmitting(true)
      const { error } = await supabase.from('notes').insert({
        user_id: user.id,
        title,
        content
      })

      if (error) throw error
      setTitle('')
      setContent('')
      await fetchNotes()
    } catch (error) {
      console.error('Error creating note:', error)
    } finally {
      setSubmitting(false)
    }
  }

  const deleteNote = async (id) => {
    try {
      const { error } = await supabase.from('notes').delete().eq('id', id)
      if (error) throw error
      await fetchNotes()
    } catch (error) {
      console.error('Error deleting note:', error)
    }
  }

  if (!user) {
    return <div className="notes-empty">Sign in to create and view notes</div>
  }

  return (
    <div className="notes-container">
      <h2>My Notes</h2>

      <form onSubmit={createNote} className="note-form">
        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
        />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : 'Add Note'}
        </button>
      </form>

      {loading ? (
        <div className="notes-loading">Loading notes...</div>
      ) : notes.length === 0 ? (
        <div className="notes-empty">No notes yet. Create your first one!</div>
      ) : (
        <div className="notes-list">
          {notes.map((note) => (
            <div key={note.id} className="note-item">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <small>{new Date(note.created_at).toLocaleDateString()}</small>
              <button
                onClick={() => deleteNote(note.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
