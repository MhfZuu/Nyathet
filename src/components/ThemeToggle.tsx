'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

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
    setIsRotating(true);
    setTimeout(() => {
      setTheme(isDark ? 'light' : 'dark');
      setIsRotating(false);
    }, 200);
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <MdLightMode
          size={20}
          className={`transition-transform duration-500 ${
            isRotating ? 'rotate-[360deg]' : ''
          }`}
        />
      ) : (
        <MdDarkMode
          size={20}
          className={`transition-transform duration-500 ${
            isRotating ? 'rotate-[360deg]' : ''
          }`}
        />
      )}
    </button>
  );
}
