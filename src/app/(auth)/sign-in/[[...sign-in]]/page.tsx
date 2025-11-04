import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#E5F5F6]">
      <SignIn
        path="/sign-in"
        forceRedirectUrl="/dashboard"
        appearance={{
          elements: {
            card: 'bg-white rounded-xl shadow-lg p-8',
            headerTitle: 'text-3xl font-bold text-gray-700',
            headerSubtitle: 'mt-2 text-slate-500',
            formButtonPrimary:
              'w-full px-3 py-2 font-semibold text-white bg-[#6dd6cc] rounded-md hover:bg-[#5bb0a8] transition-colors',
            socialButtonsBlockButton:
              'w-full flex justify-center items-center gap-3 px-4 py-2 font-medium border border-slate-300 text-slate-700 bg-white rounded-md hover:bg-slate-50 transition-colors',
            formFieldLabel: 'text-gray-600 text-sm font-medium',
            formInput:
              'w-full px-3 py-2 mt-1 border rounded-md border-slate-300 bg-[#F7FAFC] focus:outline-none focus:ring-2 focus:ring-[#6dd6cc] transition',
            footerActionLink:
              'font-medium text-[#5bb0a8] hover:text-[#4a918a] transition-colors',
            dividerLine: 'bg-slate-300',
            dividerText: 'text-sm text-slate-500',
          },
        }}
      />
    </main>
  );
};

export default SignInPage;

// 'use client';

// import { useState } from 'react';
// import { useSignIn } from '@clerk/nextjs';
// import Link from 'next/link';
// import Image from 'next/image';

// const LoginPage: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const { isLoaded, signIn, setActive } = useSignIn();
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!isLoaded) return;

//     setError(null);
//     setLoading(true);

//     try {
//       const result = await signIn.create({
//         identifier: email,
//         password,
//       });

//       if (result.status === 'complete') {
//         await setActive({ session: result.createdSessionId });
//         window.location.href = '/dashboard';
//       } else {
//         console.log('Sign-in not complete', result);
//         setError('Terjadi kesalahan saat masuk. Silakan coba lagi.');
//       }
//     } catch (err: any) {
//       setError('Email atau password salah');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     if (!isLoaded) return;
//     await signIn.authenticateWithRedirect({
//       strategy: 'oauth_google',
//       redirectUrl: `/sso-callback`,
//       redirectUrlComplete: `/dashboard`,
//     });
//   };

//   return (
//     <main className="flex items-center justify-center min-h-screen bg-[#E5F5F6]">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg bg-[#FFFFFF]">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-600">
//             Selamat Datang Kembali
//           </h1>
//           <p className="mt-2 text-slate-500 dark:text-slate-400">
//             Masuk ke akun Nyathet Anda.
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 text-gray-500">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium ">
//               Alamat Email
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               autoComplete="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border rounded-md border-slate-300 bg-[#F7FAFC] focus:outline-none focus:ring-2 focus:ring-[#6dd6cc]"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium ">
//               Kata Sandi
//             </label>
//             <input
//               id="password"
//               name="password"
//               type="password"
//               required
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 mt-1 border rounded-md border-slate-300 bg-[#F7FAFC] focus:outline-none focus:ring-2 focus:ring-[#6dd6cc]"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full px-3 py-2 font-semibold text-white border rounded-md border-slate-300 bg-[#6dd6cc] hover:bg-[#5bb0a8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5bb0a8] transition-colors"
//           >
//             Masuk
//           </button>
//         </form>

//         <div className="flex items-center">
//           <hr className="flex-grow border-slate-300 dark:border-slate-600" />
//           <span className="px-4 text-sm text-slate-500 dark:text-slate-400">
//             Atau
//           </span>
//           <hr className="flex-grow border-slate-300 dark:border-slate-600" />
//         </div>

//         <button
//           type="button"
//           onClick={handleGoogleSignIn}
//           className="w-full flex justify-center items-center gap-3 px-4 py-2 font-medium border border-slate-300 text-slate-700 bg-white rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6dd6cc] transition-colors"
//         >
//           <Image src="/google.svg" width={24} height={24} alt="google logo" />
//           Masuk dengan Google
//         </button>

//         <p className="text-sm text-center text-slate-500 dark:text-slate-400">
//           Belum punya akun?{' '}
//           <Link
//             href="/sign-up"
//             className="font-medium text-[#5bb0a8] hover:text-[#4a918a]"
//           >
//             Daftar
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// };

// export default LoginPage;
