import React from "react";

type Props = {};

const Discover = (props: Props) => {
  return (
    <div className="flex items-center justify-between  py-8 px-[80px] shadow-md text-white">
      <div className="flex flex-col max-w-md">
        <h1 className="font-extrabold text-4xl mb-4">
          Discover the easiest way to buy and sell crypto assets
        </h1>
        <p className="text-md mb-6">
          Crypto currencies let you buy goods and services, or trade them for
          profit. Here's more about what cryptocurrency is, how to buy it and
          how to protect yourself.
        </p>
        <div className="flex space-x-1">
          {/* Button with skewed right edge */}
          <button
            className="bg-[#00d9b7] text-[#0e1236] px-6 py-2 font-semibold transition duration-300 relative overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 90% 100%, 0 100%)", // Skew right side upwards
            }}
          >
            Explore more
          </button>
          {/* Normal button with border */}
           <button
            className="border-1  border-[#FFFFFF] text-[#0e1236] px-6 py-2 font-semibold transition duration-300 relative overflow-hidden"
            style={{
              clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)", // Skew left side downwards
              background: "linear-gradient(to right, #FFFFFF, transparent)", // Gradient fade to the right
            }}
          >
            Start Trading
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* Add your right-side content or image here */}
      </div>
    </div>
  );
};

export default Discover;
