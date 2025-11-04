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
  addNote: (note: NoteFormData) => void;
  updateNote: (id: string, note: NoteFormData) => void;
  deleteNote: (id: string) => void;
  toggleFavourite: (id: string) => void;
  getFavourites: () => Note[];
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    if (user) {
      const savedNotes = localStorage.getItem(`notes_${user.id}`);
      if (savedNotes) {
        const parsedNotes = JSON.parse(savedNotes);
        setNotes(
          parsedNotes.map((note: Note) => ({
            ...note,
            createdAt: new Date(note.createdAt),
            updatedAt: new Date(note.updatedAt),
          }))
        );
      }
    }
  }, [user]);

  useEffect(() => {
    if (user && notes.length >= 0) {
      localStorage.setItem(`notes_${user.id}`, JSON.stringify(notes));
    }
  }, [notes, user]);

  const addNote = (noteData: NoteFormData) => {
    if (!user) return;
    
    const newNote: Note = {
      id: crypto.randomUUID(),
      ...noteData,
      author: user.fullName || user.username || 'Anonymous',
      isFavourite: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setNotes((prev) => [newNote, ...prev]);
  };

  const updateNote = (id: string, noteData: NoteFormData) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, ...noteData, updatedAt: new Date() }
          : note
      )
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const toggleFavourite = (id: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? { ...note, isFavourite: !note.isFavourite, updatedAt: new Date() }
          : note
      )
    );
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
