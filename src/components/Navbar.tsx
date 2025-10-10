import Image from 'next/image';

const Navbar = () => {
  const navItems = [
    { label: 'Fitur', href: '#fitur' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-[#F7FAFC] border-2">
      <div className="flex justify-between items-center h-full px-5">
        <div className="flex items-center h-full">
          <Image
            loading="lazy"
            src="/nyathet.svg"
            alt="Nyathet Logo"
            width={60}
            height={60}
          ></Image>
          <span className=" -translate-x-3 font-bold text-xl text-gray-600">
            Nyathet
          </span>
        </div>
        <div className="">
          <ul className="flex space-x-4 justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-600 px-3 py-2 rounded-md text-md font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="px-3 py-2 rounded-xl bg-gray-600">Mulai Sekarang</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
