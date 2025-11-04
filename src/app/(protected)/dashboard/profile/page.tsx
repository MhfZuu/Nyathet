'use client';

import { useUser } from '@clerk/nextjs';
import { useNotes } from '@/context/NotesContext';
import { MdNote, MdStar, MdLabel } from 'react-icons/md';

const ProfilePage = () => {
  const { user } = useUser();
  const { notes, getFavourites } = useNotes();

  const favouriteNotes = getFavourites();
  const categories = new Set(notes.map((note) => note.category));

  const stats = [
    { label: 'Total Notes', value: notes.length, icon: MdNote, color: 'text-blue-600' },
    { label: 'Favourites', value: favouriteNotes.length, icon: MdStar, color: 'text-yellow-600' },
    { label: 'Categories', value: categories.size, icon: MdLabel, color: 'text-green-600' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-8">Profile</h1>

      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
          <div className="w-24 h-24 rounded-full bg-[#4FD1C5] flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
            {user?.firstName?.[0] || user?.username?.[0] || 'U'}
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-700">
              {user?.fullName || user?.username || 'User'}
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mt-1">
              {user?.primaryEmailAddress?.emailAddress || 'No email'}
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Username</p>
              <p className="text-gray-700 font-medium">{user?.username || 'Not set'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-700 font-medium break-all">
                {user?.primaryEmailAddress?.emailAddress || 'Not set'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">First Name</p>
              <p className="text-gray-700 font-medium">{user?.firstName || 'Not set'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Name</p>
              <p className="text-gray-700 font-medium">{user?.lastName || 'Not set'}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">Notes Statistics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-[#F7FAFC] rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className={stat.color} size={32} />
                  <span className={`text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {categories.size > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Your Categories</h4>
            <div className="flex flex-wrap gap-2">
              {Array.from(categories).map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 bg-[#E5F5F6] text-[#4FD1C5] rounded-full font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
