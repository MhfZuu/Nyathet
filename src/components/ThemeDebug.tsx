'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeDebug() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="text-xs text-gray-500">Loading theme...</div>;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <h3 className="font-bold text-sm mb-2 text-gray-800 dark:text-gray-200">Theme Debug</h3>
      <div className="text-xs space-y-1 text-gray-700 dark:text-gray-300">
        <div><strong>Current theme:</strong> {theme || 'undefined'}</div>
        <div><strong>Resolved theme:</strong> {resolvedTheme || 'undefined'}</div>
        <div><strong>System theme:</strong> {systemTheme || 'undefined'}</div>
        <div><strong>HTML has .dark:</strong> {document.documentElement.classList.contains('dark') ? 'Yes' : 'No'}</div>
      </div>
      <div className="mt-3 space-x-2">
        <button
          onClick={() => setTheme('light')}
          className="px-2 py-1 bg-yellow-400 text-black text-xs rounded"
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className="px-2 py-1 bg-gray-800 text-white text-xs rounded"
        >
          Dark
        </button>
        <button
          onClick={() => setTheme('system')}
          className="px-2 py-1 bg-blue-500 text-white text-xs rounded"
        >
          System
        </button>
      </div>
    </div>
  );
}
