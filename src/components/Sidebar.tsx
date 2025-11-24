'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import ThemeToggle from './ThemeToggle';

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
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="border rounded-sm pl-1 py-1 border-gray-600 dark:border-gray-300">
              <Image
                src="/nyathet.svg"
                alt="Nyathet Logo"
                width={35}
                height={35}
                className="dark:brightness-1000 translate-x-0.5"
              />
            </div>
            <span className="text-2xl font-bold text-black dark:text-white">
              Nyathet
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
      )}

      <div
        className={`lg:hidden fixed left-0 right-0 top-[57px] z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <UserButton afterSignOutUrl="/" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              My Account
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <MdLogout size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 safe-area-inset-bottom px-4 py-2 bg-gradient-to-t from-white dark:from-gray-900 ">
        <div className=" bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-xl py-1 px-3 shadow-lg">
          <div className="flex items-center justify-around max-w-md mx-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#4FD1C5] scale-110'
                      : 'text-gray-600 dark:text-gray-400 hover:text-[#4FD1C5] dark:hover:text-[#4FD1C5]'
                  }`}
                >
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-white dark:bg-gray-800 shadow-lg flex-col z-40">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="border rounded-sm pl-1 py-1 border-gray-600 dark:border-gray-300">
              <Image
                src="/nyathet.svg"
                alt="Nyathet Logo"
                width={35}
                height={35}
                className="dark:brightness-1000 translate-x-0.5"
              />
            </div>
            <span className="text-2xl font-bold text-[#4FD1C5]">Nyathet</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Note Taking App
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#E5F5F6] dark:bg-gray-700 text-[#4FD1C5] font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-3">
              <UserButton afterSignOutUrl="/" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                My Account
              </span>
            </div>
            <ThemeToggle />
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
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
