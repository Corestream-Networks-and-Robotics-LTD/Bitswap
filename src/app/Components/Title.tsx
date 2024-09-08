// components/Title.tsx
import React from 'react';

const Title: React.FC = () => {
  return (
    <div className="text-center text-white gap-[20px] grid">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
        Global decentralized currency based on
        <span className="block text-xl md:text-3xl lg:text-4xl font-bold text-primary">
          Blockchain Technology
        </span>
      </h1>
      <p className="mt-2 text-sm md:text-base lg:text-lg">
        Coin X is the world's 3rd most used crypto exchange website
      </p>
    </div>
  );
};

export default Title;
