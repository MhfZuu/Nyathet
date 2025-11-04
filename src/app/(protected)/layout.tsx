'use client';

import Sidebar from '@/components/Sidebar';
import { NotesProvider } from '@/context/NotesContext';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NotesProvider>
      <div className="flex min-h-screen bg-[#F7FAFC]">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-4 sm:p-6 md:p-8 w-full">
          {children}
        </main>
      </div>
    </NotesProvider>
  );
}
