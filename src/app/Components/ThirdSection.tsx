import React from 'react';
import Title from './Title';
import { features } from '../data/Card';
import Card from './Card';

const ThirdSection: React.FC = () => {
  return (
    <div className="  flex flex-col items-center justify-center  gap-[20px] ">
      <Title />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <Card
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            glowColor={feature.glowColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
