import React from "react";

type Props = {
  number: string;
  name: string;
  border: string;
  textColor: string;
};

const FigureCard = ({ number, name, border, textColor }: Props) => {
  return (
    <div>
      <div
        className={`rounded-lg ${border} ${textColor} bg-[#011536]  grid justify-center text-center items-center  border-[1px] border-t-4 border-r-0 lg:w-[300px] lg:h-[100px] md:w-[250px] md:h-[100px] sm:w-[300px] sm:h-[100px]  shadow-5xl`}
      >
        <p className="font-bold text-[20px]">{number}</p>
        <p className="font-bold text-[20px] text-white">{name}</p>
      </div>
    </div>
  );
};

export default FigureCard;
