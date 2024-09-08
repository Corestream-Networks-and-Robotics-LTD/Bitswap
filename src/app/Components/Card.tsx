// components/Card.tsx
import Image from 'next/image';
import React from 'react';

type CardProps = {
  icon: string;
  title: string;
  description: string;
  glowColor: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description, glowColor }) => {
  return (
    <div
      className="w-[350px]  h-[200px] p-4 text-center rounded-lg bg-gradient-to-b from-[#0d1a3a] to-[#1b264f] border border-[#2a3f5f] shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
      style={{
        boxShadow: `0 0 20px ${glowColor}`,
      }}
    >
      <div
        className="relative mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          background: glowColor,
          boxShadow: `0 0 15px ${glowColor}`,
        }}
      >
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
