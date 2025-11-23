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
    <div className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-4 sm:p-6 h-auto min-h-[250px] sm:min-h-[280px] bg-[#FFFFFF] dark:bg-gray-800 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-400 my-2">{description}</p>
      </div>
      <div className="flex gap-x-3 items-center mt-4">
        <div className="rounded-full bg-[#EDF2F7] dark:bg-gray-700 aspect-square w-10 sm:w-11 flex justify-center items-center flex-shrink-0">
          <p className="text-gray-700 dark:text-gray-200 font-bold text-base sm:text-lg">{inisial}</p>
        </div>
        <div>
          <h2 className="font-semibold text-base sm:text-lg text-gray-600 dark:text-gray-200 m-0">{name}</h2>
          <p className="font-light text-sm text-gray-400 m-0">{jobs}</p>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
