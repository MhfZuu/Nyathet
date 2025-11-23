'use client';

import { useState, useEffect } from 'react';
import { Note, NoteFormData } from '@/context/NotesContext';
import { MdClose } from 'react-icons/md';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (note: NoteFormData) => void;
  editNote?: Note | null;
}

const NoteModal = ({ isOpen, onClose, onSave, editNote }: NoteModalProps) => {
  const [formData, setFormData] = useState<NoteFormData>({
    title: '',
    category: '',
    description: '',
  });

  useEffect(() => {
    if (editNote) {
      setFormData({
        title: editNote.title,
        category: editNote.category,
        description: editNote.description,
      });
    } else {
      setFormData({ title: '', category: '', description: '' });
    }
  }, [editNote, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title.trim() && formData.category.trim() && formData.description.trim()) {
      onSave(formData);
      setFormData({ title: '', category: '', description: '' });
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
            {editNote ? 'Edit Note' : 'Create New Note'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <MdClose size={28} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-[#F7FAFC] dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Enter note title"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Category *
            </label>
            <input
              type="text"
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-[#F7FAFC] dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="e.g., Work, Personal, Study"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] bg-[#F7FAFC] dark:bg-gray-700 text-gray-900 dark:text-gray-100 min-h-[200px]"
              placeholder="Write your note here... You can use bullet points:&#10;• Item 1&#10;• Item 2"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Tip: Use bullet points (•) or numbers for lists
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-[#4FD1C5] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#3fb8ac] transition-colors"
            >
              {editNote ? 'Update Note' : 'Create Note'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
