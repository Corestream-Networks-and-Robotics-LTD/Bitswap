import React from "react";
import { figures } from "../data/Figures";
import FigureCard from "./FigureCard";

type Props = {};

const Figure = (props: Props) => {
  return (
    <div className="w-full px-[90px] flex justify-center gap-[50px] py-[100px]">
      {figures.map((fig, index) => (
        <FigureCard
          number={fig.figure}
          name={fig.text}
          key={index}
          border={fig.border}
          textColor={fig.color}
        />
      ))}
    </div>
  );
};

export default Figure;
