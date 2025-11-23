'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
        <MdDarkMode size={20} className="text-gray-400" />
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <MdLightMode size={20} className="transition-transform duration-200" />
      ) : (
        <MdDarkMode size={20} className="transition-transform duration-200" />
      )}
    </button>
  );
}
