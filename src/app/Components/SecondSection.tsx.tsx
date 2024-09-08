import React from "react";
import { figures } from "../data/Figures";
import FigureCard from "./FigureCard";

type Props = {};

const SecondSection = (props: Props) => {
  return (
    <div className="w-full grid grid-cols-1  md:grid-cols-3 justify-center gap-[80px] items-center ">
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

export default SecondSection;
