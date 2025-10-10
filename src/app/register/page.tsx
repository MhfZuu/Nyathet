// src/app/register/page.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      password,
    });
    // Di sini Anda akan menambahkan logika untuk mengirim data ke API
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E5F5F6] p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-700">
            Buat Akun Nyathet
          </h1>
          <p className="mt-2 text-slate-500">
            Mulai perjalanan mencatat Anda hari ini.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 text-gray-600">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium">
              Nama Lengkap
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md border-slate-300 bg-[#F7FAFC] focus:outline-none focus:ring-2 focus:ring-[#6dd6cc] transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Alamat Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md border-slate-300 bg-[#F7FAFC] focus:outline-none focus:ring-2 focus:ring-[#6dd6cc] transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Kata Sandi
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md border-slate-300 bg-[#F7FAFC] focus:outline-none focus:ring-2 focus:ring-[#6dd6cc] transition"
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 font-semibold text-white bg-[#6dd6cc] rounded-md hover:bg-[#5bb0a8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bb0a8] transition-colors"
          >
            Daftar
          </button>
        </form>

        <div className="flex items-center">
          <hr className="flex-grow border-slate-300" />
          <span className="px-4 text-sm text-slate-500">Atau</span>
          <hr className="flex-grow border-slate-300" />
        </div>

        <button
          type="button"
          className="w-full flex justify-center items-center gap-3 px-4 py-2 font-medium border border-slate-300 text-slate-700 bg-white rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6dd6cc] transition-colors"
        >
          <Image src="/google.svg" width={24} height={24} alt="google logo" />
          Masuk dengan Google
        </button>

        <p className="text-sm text-center text-slate-500">
          Sudah punya akun?{' '}
          <Link
            href="/login"
            className="font-medium text-[#5bb0a8] hover:text-[#4a918a] transition-colors"
          >
            Masuk
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
