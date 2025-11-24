'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
  ];

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace(/.*#/, '');
    const elem = document.getElementById(targetId);

    if (elem) {
      const navbarHeight = 70;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Mobile Menu Backdrop with blur effect - only blurs content below navbar */}
      <div
        className={`fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7FAFC] dark:bg-gray-900">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b-2 border-gray-200 dark:border-gray-700">
          <Link href="/" className="flex items-center h-full cursor-pointer">
            <Image
              loading="lazy"
              src="/nyathet.svg"
              alt="Nyathet Logo"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12 dark:invert-30"
            />
            <span className="-translate-x-2 font-bold text-lg sm:text-xl text-gray-600 dark:text-gray-200">
              Nyathet
            </span>
          </Link>
          <div className="hidden lg:block">
            <ul className="flex space-x-2 xl:space-x-4 justify-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-gray-600 dark:text-gray-300 px-2 xl:px-3 py-2 rounded-md text-sm xl:text-md font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-4">
            <ThemeToggle />
            <Link
              href="/sign-in"
              className="text-gray-600 dark:text-gray-300 px-3 xl:px-4 py-2 rounded-xl border border-gray-600 dark:border-gray-400 text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className="px-3 xl:px-4 py-2 rounded-xl bg-gray-600 dark:bg-gray-700 text-white text-sm hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors whitespace-nowrap"
            >
              Mulai Sekarang
            </Link>
          </div>
          <div className="flex lg:hidden items-center gap-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div
                className={`transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-90' : 'rotate-0'
                }`}
              >
                {isMobileMenuOpen ? (
                  <MdClose size={24} />
                ) : (
                  <MdMenu size={24} />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - attached to navbar */}
        <div
          className={`lg:hidden bg-[#F7FAFC] dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`px-4 py-4 space-y-2 transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}
          >
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`block text-gray-600 dark:text-gray-300 px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2">
              <Link
                href="/sign-in"
                className={`block text-center text-gray-600 dark:text-gray-300 px-4 py-3 rounded-xl border border-gray-600 dark:border-gray-400 text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '150ms' : '0ms',
                }}
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className={`block text-center px-4 py-3 rounded-xl bg-gray-600 dark:bg-gray-700 text-white text-sm hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '200ms' : '0ms',
                }}
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
