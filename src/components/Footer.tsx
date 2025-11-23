import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#EDF2F7] dark:bg-gray-800 text-medium text-gray-500 dark:text-gray-400 px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <div className="flex-1 flex items-center gap-x-2">
            <Image
              src="/Nyathet.svg"
              width={50}
              height={50}
              alt="Logo Nyathet"
            />
            <p className="text-lg lg:text-xl font-bold">Nyathet</p>
          </div>
          <div className="flex-1 flex justify-around gap-x-3 lg:gap-x-5 text-sm lg:text-base">
            <p className="hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer">Tentang</p>
            <p className="hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer">Kontak</p>
            <p className="hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer whitespace-nowrap">Kebijakan Privasi</p>
            <p className="hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer whitespace-nowrap">Ketentuan Layanan</p>
          </div>
          <div className="flex-1 text-right text-sm">
            <p>&copy; 2025 Nyathet</p>
            <p className="hidden lg:block">Hak cipta dilindungi undang-undang yang berlaku</p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 text-center">
          <div className="flex flex-col items-center gap-y-2">
            <Image
              src="/Nyathet.svg"
              width={40}
              height={40}
              alt="Logo Nyathet"
            />
            <p className="text-lg font-bold">Nyathet</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <p className="hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer">Tentang</p>
            <p className="hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer">Kontak</p>
            <p className="hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer">Kebijakan Privasi</p>
            <p className="hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer">Ketentuan Layanan</p>
          </div>
          
          <div className="text-xs space-y-1">
            <p>&copy; 2025 Nyathet</p>
            <p>Hak cipta dilindungi undang-undang</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
