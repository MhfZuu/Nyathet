'use client';

import { useState } from 'react';
import { useNotes, Note } from '@/context/NotesContext';
import NoteCard from '@/components/NoteCard';
import NoteModal from '@/components/NoteModal';
import { MdStar } from 'react-icons/md';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FavouritesPage = () => {
  const { updateNote, deleteNote, toggleFavourite, getFavourites, isLoading } = useNotes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const favouriteNotes = getFavourites();

  const handleSaveNote = async (noteData: { title: string; category: string; description: string }) => {
    if (editingNote) {
      await updateNote(editingNote.id, noteData);
      setEditingNote(null);
    }
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingNote(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4FD1C5] mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading notes...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-200 mb-2">Favourite Notes</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {favouriteNotes.length} {favouriteNotes.length === 1 ? 'favourite note' : 'favourite notes'}
        </p>
      </div>

      {favouriteNotes.length === 0 ? (
        <div className="text-center py-16">
          <MdStar className="mx-auto mb-4 text-yellow-500" size={80} />
          <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2">No favourite notes yet</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Mark notes as favourite to see them here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {favouriteNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={handleEditNote}
              onDelete={deleteNote}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </div>
      )}

      <NoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveNote}
        editNote={editingNote}
      />
        </>
      )}
    </div>
  );
};

export default FavouritesPage;
