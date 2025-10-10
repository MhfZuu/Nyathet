import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, description, img }) => {
  return (
    <div
      className="rounded-xl border-2 border-gray-200 p-6 h-64
     bg-[#F7FAFC]"
    >
      <div className="bg-[#D5F2F0] rounded-xl p-2 w-fit ">
        <Image src={img} width={40} height={40} alt="icon" />
      </div>
      <div className="mt-3">
        <h2 className="font-semibold text-2xl text-gray-600">{title}</h2>
        <p className="text-xl text-gray-500 my-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
