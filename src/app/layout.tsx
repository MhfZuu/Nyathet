import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { idID } from '@clerk/localizations';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nyathet - Simple Note Taking',
  description:
    'Get organized with Nyathet, your all-in-one note-taking and task management app.',
};

const customLocalization = {
  ...idID,
  signUp: {
    ...idID.signUp,
    start: {
      ...(idID.signUp?.start ?? {}),
      title: 'Buat Akun Nyathet',
      subtitle: 'Mulai perjalanan mencatat Anda hari ini.',
    },
  },
  signIn: {
    ...idID.signIn,
    start: {
      ...(idID.signIn?.start ?? {}),
      title: 'Masuk ke Nyathet',
      subtitle: 'Selamat datang kembali!',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={customLocalization}>
      <html lang="id">
        <body
          className={`h-full ${geistSans.variable} ${geistMono.variable} antialiased`}
          suppressHydrationWarning={false}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
