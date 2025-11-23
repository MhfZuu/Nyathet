import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, description, img }) => {
  return (
    <div className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-4 sm:p-6 h-auto min-h-[250px] sm:min-h-[280px] bg-[#F7FAFC] dark:bg-gray-800 flex flex-col">
      <div className="bg-[#D5F2F0] dark:bg-[#4FD1C5]/20 rounded-xl p-2 w-fit">
        <Image src={img} width={36} height={36} alt="icon" className="w-8 h-8 sm:w-9 sm:h-9" />
      </div>
      <div className="mt-3 flex-1 flex flex-col">
        <h2 className="font-semibold text-xl sm:text-2xl text-gray-600 dark:text-gray-200">{title}</h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400 my-2 flex-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
