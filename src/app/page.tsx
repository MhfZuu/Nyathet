import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import CardReview from '@/components/CardReview';

export default function Home() {
  const cardData = [
    {
      title: 'Pencatatan Intuitif',
      description:
        'Editor yang bersih dan mudah digunakan memungkinkan ide-ide Anda mengalir dengan bebas.',
      img: '/icon1.svg',
    },
    {
      title: 'Daftar Tugas Cepat',
      description:
        'Kelola tugas Anda dengan prioritas dan tenggat waktu, semuanya dalam satu tempat.',
      img: '/icon2.svg',
    },
    {
      title: 'Organisasi Fleksibel',
      description:
        'Gunakan tag, folder, dan pencarian canggih untuk menemukan apa yang Anda butuhkan dengan cepat.',
      img: '/icon3.svg',
    },
  ];

  const cardReview = [
    {
      description:
        '"Nyathet telah mengubah cara saya belajar. Saya dapat menyimpan semua catatan kuliah, tugas, dan riset saya di satu tempat. Ini adalah penyelamat hidup!"',
      name: 'Sarah S',
      jobs: 'Mahasiswa',
      inisial: 'SS',
    },
    {
      description:
        '"Sebagai seorang profesional sibuk, Nyathet membantu saya tetap terorganisir. Antarmuka yang sederhana dan fitur manajemen tugas membuat hari kerja saya lebih efisien."',
      name: 'John L',
      jobs: 'Manajer Proyek',
      inisial: 'JL',
    },
    {
      description:
        '"Saya suka bagaimana Nyathet memungkinkan saya untuk menyesuaikan cara saya mengatur catatan dan tugas saya. Ini sangat cocok untuk gaya kerja saya yang unik."',
      name: 'Emily R',
      jobs: 'Freelancer',
      inisial: 'ER',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen w-full">
        <section className="relative bg-[#E5F5F6] h-screen px-12 flex gap-x-10 justify-around items-center">
          <div className="font-extrabold text-6xl text-wrap">
            <div>
              <h1 className="text-gray-600">Atur Pikiran Anda</h1>
              <h1 className="text-[#4FD1C5]">dengan Mudah</h1>
            </div>
            <p className="mt-4 max-w-xl text-xl font-medium text-gray-600 mx-auto md:mx-0">
              ZenNotes adalah ruang kerja all-in-one Anda. Dirancang untuk
              pelajar dan profesional modern, kami membantu Anda mengubah
              kekacauan menjadi kejelasan.
            </p>
            <div className="flex font-semibold text-lg text-gray-700 gap-x-4 my-8">
              <a href="/sign-up" className="shadow-md rounded-xl py-3 px-4 bg-[#4FD1C5]">
                Mulai Sekarang
              </a>
              <a href="#fitur" className="shadow-md rounded-xl py-3 px-4 bg-[#e2e5e7]">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <Image
              loading="lazy"
              src="/heroImage.png"
              width={450}
              height={450}
              alt="Hero Image"
            ></Image>
          </div>
        </section>
        <section className="relative pt-10 pb-16 bg-[#FFFFFF]" id="fitur">
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-[#4FD1C5] font-semibold text-xl">
              TINGKATKAN ALIRAN KERJA ANDA
            </h1>
            <h1 className="mt-2 font-bold text-4xl text-gray-600">
              Semua yang Anda Butuhkan, Tidak Ada yang Tidak{' '}
            </h1>
            <p className="text-gray-500 text-xl mt-2 max-w-[60%] text-center">
              Dari catatan cepat hingga proyek yang kompleks, Nyathet siap
              mendukung semua kebutuhan produktivitas Anda, membuat setiap ide
              dan tugas lebih mudah diatur dan diingat.
            </p>
          </div>
          <div className="flex gap-x-8 mx-12 pt-6">
            {cardData.map((card, index) => (
              <div key={index}>
                <Card
                  title={card.title}
                  description={card.description}
                  img={card.img}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="relative pt-10 pb-16 bg-[#F7FAFC]" id="testimoni">
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-[#4FD1C5] font-semibold text-xl">
              DICINTAI OLEH PENGGUNA
            </h1>
            <h1 className="mt-2 font-bold text-4xl text-gray-600">
              Apa Kata Pengguna Kami
            </h1>
            <p className="text-gray-500 text-xl mt-2 max-w-[60%] text-center">
              Kami bangga telah membantu banyak orang untuk menjadi lebih
              terorganisir dan produktif.
            </p>
          </div>
          <div className="flex gap-x-8 mx-12 pt-6">
            {cardReview.map((card, index) => (
              <div key={index}>
                <CardReview
                  description={card.description}
                  name={card.name}
                  jobs={card.jobs}
                  inisial={card.inisial}
                />
              </div>
            ))}
          </div>
        </section>
        <section
          className="bg-[#FFFFFF] px-18 py-18 flex justify-between"
          id="tentang-kami"
        >
          <div className=" flex-1 flex flex-col items-center justify-center mb-8 text-left">
            <h1 className="text-[#4FD1C5] font-semibold text-xl w-full">
              MISI KAMI
            </h1>
            <h1 className="mt-2 font-bold text-4xl text-gray-600 w-full">
              Tentang Nyathet
            </h1>
            <p className="text-gray-500 text-xl mt-2 w-full pr-18 ">
              Kami percaya bahwa perangkat lunak yang hebat dapat menghilangkan
              gesekan dari hidup kita. Nyathet lahir dari keinginan untuk
              menciptakan alat yang sederhana namun kuat untuk mengatur pikiran,
              tugas, dan ide. Tim kami yang terdiri dari para desainer,
              pengembang, dan pemikir yang bersemangat berdedikasi untuk
              membangun produk terbaik untuk membantu Anda mencapai kejelasan
              dan fokus.
            </p>
          </div>
          <div className="flex-1 rounded-xl overflow-hidden aspect-[4/2] relative">
            <Image
              className="object-cover"
              loading="lazy"
              src="/aboutImage.png"
              fill={true}
              alt="Hero Image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>
        <section className=" relative bg-[#F7FAFC] py-24 px-12">
          <div className="relative bg-[#4A5568] h-fit rounded-3xl overflow-clip flex items-center justify-center py-20">
            <div className="absolute rounded-full w-55 top-0  left-0 aspect-square z-10 bg-[#4B6E7A] -translate-15"></div>
            <div className="absolute bottom-0 right-0 rounded-full w-70 aspect-square z-10 bg-[#4B6E7A] translate-20"></div>
            <div className="flex flex-col gap-y-3 text-center">
              <h1 className="text-white font-bold text-4xl">
                Buka Produktivitas Anda
              </h1>
              <p className="w-140 text-lg text-gray-200">
                Bergabunglah dengan banyak orang lain yang menyederhanakan hidup
                mereka dengan Nyathet. Gratis untuk memulai
              </p>
              <a href="/sign-up" className="bg-[#4FD1C5] rounded-xl px-5 py-2 mx-auto mt-4 block w-fit">
                <p className="text-lg font-semibold text-gray-700">
                  Mulai Gratis Sekarang
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
