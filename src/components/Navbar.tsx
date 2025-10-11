'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent } from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
  ];

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

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
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-[#F7FAFC] border-2">
      <div className="flex justify-between items-center h-full px-5 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center h-full cursor-pointer">
          <Image
            loading="lazy"
            src="/nyathet.svg"
            alt="Nyathet Logo"
            width={60}
            height={60}
          />
          <span className="-translate-x-3 font-bold text-xl text-gray-600">
            Nyathet
          </span>
        </Link>

        <div className="hidden md:block">
          <ul className="flex space-x-4 justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-gray-600 px-3 py-2 rounded-md text-md font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-4">
          <Link
            href="/sign-in"
            className="text-gray-600 px-4 py-2 rounded-xl border-gray-600 border-1 text-sm hover:bg-gray-200 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 rounded-xl bg-gray-600 text-white text-sm hover:bg-gray-700 transition-colors"
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
