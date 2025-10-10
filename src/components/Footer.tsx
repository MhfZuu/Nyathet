import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#EDF2F7] text-medium text-gray-500 px-8 py-10 text-center flex justify-between items-center grow">
      <div className="flex-1 flex">
        <Image
          src="/Nyathet.svg"
          width={50}
          height={50}
          alt="Logo Nyathet"
        ></Image>
        <p className="text-xl font-bold">Nyathet</p>
      </div>
      <div className="flex-1 flex justify-around gap-x-5">
        <p>Tentang</p>
        <p>Kontak</p>
        <p>Kebijakan Privasi</p>
        <p>Ketentuan Layanan</p>
      </div>
      <div className="flex-1 text-right">
        <p className=" ">&copy; {new Date().getFullYear()} Nyathet</p>
        <p> Hak cipta dilindungi undang-undang yang berlaku</p>
      </div>
    </footer>
  );
};

export default Footer;
