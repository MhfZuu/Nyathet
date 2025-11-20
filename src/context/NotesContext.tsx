'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useUser } from '@clerk/nextjs';

export interface Note {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  isFavourite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface NoteFormData {
  title: string;
  category: string;
  description: string;
}

interface NotesContextType {
  notes: Note[];
  addNote: (note: NoteFormData) => Promise<void>;
  updateNote: (id: string, note: NoteFormData) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
  toggleFavourite: (id: string) => Promise<void>;
  getFavourites: () => Note[];
  isLoading: boolean;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded } = useUser();
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoaded && user) {
      fetchNotes();
    } else if (isLoaded && !user) {
      setIsLoading(false);
    }
  }, [user, isLoaded]);

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/notes');
      if (response.ok) {
        const data = await response.json();
        setNotes(
          data.notes.map((note: { _id: string; title: string; author: string; category: string; description: string; isFavourite: boolean; createdAt: string; updatedAt: string }) => ({
            id: note._id,
            title: note.title,
            author: note.author,
            category: note.category,
            description: note.description,
            isFavourite: note.isFavourite,
            createdAt: new Date(note.createdAt),
            updatedAt: new Date(note.updatedAt),
          }))
        );
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addNote = async (noteData: NoteFormData) => {
    if (!user) return;
    
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...noteData,
          author: user.fullName || user.username || 'Anonymous',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const newNote: Note = {
          id: data.note._id,
          title: data.note.title,
          author: data.note.author,
          category: data.note.category,
          description: data.note.description,
          isFavourite: data.note.isFavourite,
          createdAt: new Date(data.note.createdAt),
          updatedAt: new Date(data.note.updatedAt),
        };
        setNotes((prev) => [newNote, ...prev]);
      }
    } catch (error) {
      console.error('Failed to add note:', error);
    }
  };

  const updateNote = async (id: string, noteData: NoteFormData) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      });

      if (response.ok) {
        const data = await response.json();
        setNotes((prev) =>
          prev.map((note) =>
            note.id === id
              ? {
                  ...note,
                  ...noteData,
                  updatedAt: new Date(data.note.updatedAt),
                }
              : note
          )
        );
      }
    } catch (error) {
      console.error('Failed to update note:', error);
    }
  };

  const deleteNote = async (id: string) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNotes((prev) => prev.filter((note) => note.id !== id));
      }
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  const toggleFavourite = async (id: string) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;

    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isFavourite: !note.isFavourite,
        }),
      });

      if (response.ok) {
        setNotes((prev) =>
          prev.map((n) =>
            n.id === id
              ? { ...n, isFavourite: !n.isFavourite, updatedAt: new Date() }
              : n
          )
        );
      }
    } catch (error) {
      console.error('Failed to toggle favourite:', error);
    }
  };

  const getFavourites = () => {
    return notes.filter((note) => note.isFavourite);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        updateNote,
        deleteNote,
        toggleFavourite,
        getFavourites,
        isLoading,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
