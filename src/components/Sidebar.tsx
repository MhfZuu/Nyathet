'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useClerk, UserButton } from '@clerk/nextjs';
import {
  MdDashboard,
  MdStar,
  MdPerson,
  MdLogout,
  MdMenu,
  MdClose,
} from 'react-icons/md';

const Sidebar = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: MdDashboard },
    { name: 'Favourites', path: '/dashboard/favourites', icon: MdStar },
    { name: 'Profile', path: '/dashboard/profile', icon: MdPerson },
  ];

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg text-gray-700"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black opacity-10"
          onClick={closeMobileMenu}
        />
      )}
      <aside
        className={`
        fixed left-0 top-0 h-screen w-64 bg-white shadow-lg flex flex-col z-40 transition-transform duration-300
        ${
          isMobileMenuOpen
            ? 'translate-x-0'
            : '-translate-x-full lg:translate-x-0'
        }
      `}
      >
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-[#4FD1C5]">Nyathet</h1>
          <p className="text-sm text-gray-500 mt-1">Note Taking App</p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={closeMobileMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#E5F5F6] text-[#4FD1C5] font-semibold'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <div className="flex items-center gap-3 px-4 py-2">
            <UserButton afterSignOutUrl="/" />
            <span className="text-sm text-gray-600">My Account</span>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <MdLogout size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
