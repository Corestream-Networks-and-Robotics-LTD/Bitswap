import React from "react";

type Props = {};

const FirstSection: React.FC<Props> = () => {
  return (
    <div className="grid md:flex items-center md:justify-between text-center text-white p-8 gap-[20px] ">
      <div className="flex flex-col max-w-md ">
        <h1 className="font-extrabold text-4xl mb-4">
          Fast, Secure, and Seamless Cross-Chain Trading
        </h1>
        <p className="text-lg mb-6">
          Revolutionizing DeFi with Solana’s High-Performance DEX
        </p>
        <div className="flex space-x-4 justify-center md:justify-start ">
          <button
            className="bg-[#00d9b7] text-[#0e1236] px-6 py-2 font-semibold transition duration-300 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)",
            }}
          >
            Start Trading Now
          </button>
          <button
            className="border border-[#FFFFFF] text-[#0e1236] px-6 py-2 font-semibold transition duration-300 relative overflow-hidden"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
              background: "linear-gradient(to right, #FFFFFF, transparent)",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center lg:w-1/2">
        <div className="w-full h-[300px] bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">
            Dynamic Graphic/Video Placeholder
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
