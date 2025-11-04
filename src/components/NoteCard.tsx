'use client';

import { Note } from '@/context/NotesContext';
import { useState, useEffect, useRef } from 'react';
import { MdMoreVert, MdEdit, MdDelete, MdStar, MdStarBorder } from 'react-icons/md';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onToggleFavourite: (id: string) => void;
}

const NoteCard = ({ note, onEdit, onDelete, onToggleFavourite }: NoteCardProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow relative">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-700 mb-2">{note.title}</h3>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#E5F5F6] text-[#4FD1C5] rounded-full">
              {note.author}
            </span>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full">
              {note.category}
            </span>
          </div>
        </div>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-gray-500 hover:text-gray-700 p-1"
            aria-label="More options"
          >
            <MdMoreVert size={24} />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              <button
                onClick={() => {
                  onEdit(note);
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 flex items-center gap-2"
              >
                <MdEdit size={18} /> Edit
              </button>
              <button
                onClick={() => {
                  onToggleFavourite(note.id);
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 flex items-center gap-2"
              >
                {note.isFavourite ? (
                  <>
                    <MdStar size={18} /> Unfavourite
                  </>
                ) : (
                  <>
                    <MdStarBorder size={18} /> Favourite
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  onDelete(note.id);
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 flex items-center gap-2"
              >
                <MdDelete size={18} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="text-gray-600 text-sm mb-3 line-clamp-4 whitespace-pre-wrap">
        {note.description}
      </div>

      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>Updated: {formatDate(note.updatedAt)}</span>
        {note.isFavourite && <MdStar className="text-yellow-500" size={20} />}
      </div>
    </div>
  );
};

export default NoteCard;
