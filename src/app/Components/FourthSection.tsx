// components/Support.tsx
import React from "react";
import Image from "next/image";
import Map from "../../../public/Map.svg";

const FourthSection: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto text-center grid  text-white gap-[20px]">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
        We have support for over 30 languages around the world
      </h1>
      <div className="relative w-full h-[400px]">
        <Image
          src={Map}
          alt="World Map"
          layout="fill"
          objectFit="contain"
          className="mx-auto"
        />
      </div>

    </div>
  );
};

export default FourthSection;
