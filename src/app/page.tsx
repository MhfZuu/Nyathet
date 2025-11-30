import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import CardReview from "@/components/CardReview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import {
  AnimatedHero,
  AnimatedSection,
  ParallaxElement,
} from "@/components/Animations";

export default function Home() {
  const cardData = [
    {
      title: "Pencatatan Intuitif",
      description:
        "Editor yang bersih dan mudah digunakan memungkinkan ide-ide Anda mengalir dengan bebas.",
      img: "/icon1.svg",
    },
    {
      title: "Daftar Tugas Cepat",
      description:
        "Kelola tugas Anda dengan prioritas dan tenggat waktu, semuanya dalam satu tempat.",
      img: "/icon2.svg",
    },
    {
      title: "Organisasi Fleksibel",
      description:
        "Gunakan tag, folder, dan pencarian canggih untuk menemukan apa yang Anda butuhkan dengan cepat.",
      img: "/icon3.svg",
    },
  ];

  const cardReview = [
    {
      description:
        '"Nyathet telah mengubah cara saya belajar. Saya dapat menyimpan semua catatan kuliah, tugas, dan riset saya di satu tempat. Ini adalah penyelamat hidup!"',
      name: "Sarah S",
      jobs: "Mahasiswa",
      inisial: "SS",
    },
    {
      description:
        '"Sebagai seorang profesional sibuk, Nyathet membantu saya tetap terorganisir. Antarmuka yang sederhana dan fitur manajemen tugas membuat hari kerja saya lebih efisien."',
      name: "John L",
      jobs: "Manajer Proyek",
      inisial: "JL",
    },
    {
      description:
        '"Saya suka bagaimana Nyathet memungkinkan saya untuk menyesuaikan cara saya mengatur catatan dan tugas saya. Ini sangat cocok untuk gaya kerja saya yang unik."',
      name: "Emily R",
      jobs: "Freelancer",
      inisial: "ER",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen w-full">
        <section className="relative bg-[#E5F5F6] dark:bg-gray-800 min-h-screen px-4 sm:px-6 lg:px-12  flex flex-col lg:flex-row gap-8 lg:gap-x-10 justify-center lg:justify-around items-center pt-20 pb-12">
          <AnimatedHero className="flex flex-col lg:flex-row gap-8 lg:gap-x-10 justify-center lg:justify-around items-center w-full max-w-7xl">
            <div className="font-extrabold text-center lg:text-left max-w-2xl lg:max-w-none">
              <div>
                <h1 className="hero-title text-gray-600 dark:text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Atur Pikiran Anda
                </h1>
                <h1 className="hero-subtitle text-[#4FD1C5] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  dengan Mudah
                </h1>
              </div>
              <p className="hero-description mt-4 max-w-xl text-base sm:text-lg lg:text-xl font-medium text-gray-600 dark:text-gray-300 mx-auto lg:mx-0">
                Nyathet adalah ruang kerja all-in-one Anda. Dirancang untuk
                pelajar dan profesional modern, kami membantu Anda mengubah
                kekacauan menjadi kejelasan.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row font-semibold text-base lg:text-lg text-gray-700 dark:text-gray-900 gap-3 sm:gap-x-4 my-8 justify-center lg:justify-start">
                <Link
                  href="/sign-up"
                  className="shadow-md rounded-xl py-3 px-6 bg-[#4FD1C5] hover:bg-[#3fb8ac] transition-colors text-center"
                >
                  Mulai Sekarang
                </Link>
                <a
                  href="#fitur"
                  className="shadow-md rounded-xl py-3 px-6 bg-[#e2e5e7] dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-center"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>
            </div>
            <div className="hero-image rounded-xl overflow-hidden w-full max-w-md lg:max-w-lg flex-shrink-0">
              <Image
                src="/heroImage.png"
                width={450}
                height={450}
                alt="Hero Image"
                priority
                className="w-full h-auto"
              />
            </div>
          </AnimatedHero>
        </section>

        <section
          className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 bg-[#FFFFFF] dark:bg-gray-900 px-4 sm:px-6 lg:px-12"
          id="fitur"
        >
          <AnimatedSection animation="fadeUp" duration={1}>
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
              <h1 className="text-[#4FD1C5] font-semibold text-base sm:text-lg lg:text-xl">
                TINGKATKAN ALIRAN KERJA ANDA
              </h1>
              <h1 className="mt-2 font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-200 text-center px-4">
                Semua yang Anda Butuhkan, Tidak Ada yang Tidak
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-xl mt-2 max-w-full sm:max-w-[80%] lg:max-w-[60%] text-center px-4">
                Dari catatan cepat hingga proyek yang kompleks, Nyathet siap
                mendukung semua kebutuhan produktivitas Anda, membuat setiap ide
                dan tugas lebih mudah diatur dan diingat.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection
            animation="scale"
            duration={1.2}
            stagger={0.2}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4"
          >
            {cardData.map((card, index) => (
              <div key={index}>
                <Card
                  title={card.title}
                  description={card.description}
                  img={card.img}
                />
              </div>
            ))}
          </AnimatedSection>
        </section>

        <section
          className="relative pt-10 sm:pt-16 pb-12 sm:pb-16 bg-[#F7FAFC] dark:bg-gray-800 px-4 sm:px-6 lg:px-12"
          id="testimoni"
        >
          <AnimatedSection animation="fadeUp" duration={1}>
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-12">
              <h1 className="text-[#4FD1C5] font-semibold text-base sm:text-lg lg:text-xl">
                DICINTAI OLEH PENGGUNA
              </h1>
              <h1 className="mt-2 font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-200 text-center">
                Apa Kata Pengguna Kami
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-xl mt-2 max-w-full sm:max-w-[80%] lg:max-w-[60%] text-center px-4">
                Kami bangga telah membantu banyak orang untuk menjadi lebih
                terorganisir dan produktif.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection
            animation="fadeUp"
            duration={1.2}
            stagger={0.18}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-6 pt-16 hidden lg:grid"
          >
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
          </AnimatedSection>
          <AnimatedSection
            animation="scale"
            duration={1}
            className="justify-center items-center mt-8 lg:hidden flex px-6"
          >
            <TestimonialsCarousel testimonials={cardReview} />
          </AnimatedSection>
        </section>

        <section
          className="bg-[#FFFFFF] dark:bg-gray-900 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-18 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
          id="tentang-kami"
        >
          <AnimatedSection
            animation="fadeRight"
            duration={1.2}
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-[#4FD1C5] font-semibold text-base sm:text-lg lg:text-xl w-full">
              MISI KAMI
            </h1>
            <h1 className="mt-2 font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-200 w-full">
              Tentang Nyathet
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-xl mt-4 w-full">
              Kami percaya bahwa perangkat lunak yang hebat dapat menghilangkan
              gesekan dari hidup kita. Nyathet lahir dari keinginan untuk
              menciptakan alat yang sederhana namun kuat untuk mengatur pikiran,
              tugas, dan ide. Tim kami yang terdiri dari para desainer,
              pengembang, dan pemikir yang bersemangat berdedikasi untuk
              membangun produk terbaik untuk membantu Anda mencapai kejelasan
              dan fokus.
            </p>
          </AnimatedSection>
          <AnimatedSection
            animation="slideLeft"
            duration={1.2}
            className="flex-1 rounded-xl overflow-hidden w-full max-w-2xl lg:max-w-none aspect-video lg:aspect-[4/2] relative"
          >
            <ParallaxElement speed={0.3}>
              <Image
                className="object-cover"
                loading="lazy"
                src="/aboutImage.png"
                fill={true}
                alt="About Image"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </ParallaxElement>
          </AnimatedSection>
        </section>

        <section className="relative bg-[#F7FAFC] dark:bg-gray-800 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
          <AnimatedSection animation="scale" duration={1.2}>
            <div className="relative bg-[#4A5568] dark:bg-gray-700 rounded-2xl lg:rounded-3xl overflow-clip flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4">
              <div className="absolute rounded-full w-32 sm:w-40 lg:w-55 top-0 left-0 aspect-square z-10 bg-[#4B6E7A] dark:bg-gray-600 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 rounded-full w-40 sm:w-56 lg:w-70 aspect-square z-10 bg-[#4B6E7A] dark:bg-gray-600 translate-x-1/2 translate-y-1/2"></div>
              <div className="flex flex-col gap-y-3 text-center relative z-20 max-w-3xl">
                <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl px-4">
                  Buka Produktivitas Anda
                </h1>
                <p className="text-base sm:text-lg text-gray-200 px-4">
                  Bergabunglah dengan banyak orang lain yang menyederhanakan
                  hidup mereka dengan Nyathet. Gratis untuk memulai
                </p>
                <Link
                  href="/sign-up"
                  className="bg-[#4FD1C5] hover:bg-[#3fb8ac] transition-colors rounded-xl px-6 py-3 mx-auto mt-4 block w-fit"
                >
                  <p className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-900">
                    Mulai Gratis Sekarang
                  </p>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
