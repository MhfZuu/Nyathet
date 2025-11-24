'use client';

import { useState } from 'react';
import { useNotes, Note } from '@/context/NotesContext';
import NoteCard from '@/components/NoteCard';
import NoteModal from '@/components/NoteModal';
import { MdAdd, MdSearch, MdFilterList } from 'react-icons/md';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const Dashboard = () => {
  const { notes, addNote, updateNote, deleteNote, toggleFavourite, isLoading } =
    useNotes();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const handleSaveNote = async (noteData: {
    title: string;
    category: string;
    description: string;
  }) => {
    if (editingNote) {
      await updateNote(editingNote.id, noteData);
      setEditingNote(null);
    } else {
      await addNote(noteData);
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

  const categories = ['all', ...new Set(notes.map((note) => note.category))];

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === 'all' || note.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-3 border-l-3 border-[#4FD1C5] mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading notes...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 dark:text-gray-200">
                  My Notes
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  {notes.length} {notes.length === 1 ? 'note' : 'notes'} in
                  total
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#4FD1C5] text-white text-shadow-white font-semibold px-6 py-3 rounded-lg hover:bg-[#3fb8ac] transition-colors shadow-md flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <MdAdd size={24} />
                New Note
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <MdSearch
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="relative">
                <MdFilterList
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full sm:w-auto pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredNotes.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
                {notes.length === 0 ? 'No notes yet' : 'No notes found'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {notes.length === 0
                  ? 'Create your first note to get started!'
                  : 'Try adjusting your search or filters'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredNotes.map((note) => (
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

export default Dashboard;
