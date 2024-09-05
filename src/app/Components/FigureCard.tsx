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
        className={`rounded-lg ${border} ${textColor} bg-[#011536]  grid justify-center text-center items-center  border-[1px] border-t-4 border-r-0 w-[300px] h-[100px] m-5 shadow-5xl`}
      >
        <p className="font-bold text-[20px]">{number}</p>
        <p className="font-bold text-[20px] text-white">{name}</p>
      </div>
    </div>
  );
};

export default FigureCard;
