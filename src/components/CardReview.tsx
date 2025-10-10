interface CardProps {
  description: string;
  name: string;
  jobs: string;
  inisial: string;
}

const CardReview: React.FC<CardProps> = ({
  description,
  name,
  jobs,
  inisial,
}) => {
  return (
    <div
      className="rounded-xl border-2 border-gray-200 p-6 h-64
     bg-[#FFFFFF]"
    >
      <div className="mt-3">
        <p className="text-xl text-gray-500 my-2">{description}</p>
      </div>
      <div className="flex gap-x-3 items-center">
        <div className="rounded-full bg-[#EDF2F7] aspect-square w-11 flex justify-center items-center">
          <p className="text-gray-700 font-bold text-lg">{inisial}</p>
        </div>
        <div className="mt-2">
          <h2 className="font-semibold text-lg text-gray-600 m-0">{name}</h2>
          <p className="font-light text-gray-400 m-0">{jobs}</p>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
