import React from "react";
import Header from "./Components/Header";
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  Footer,
} from "./Components";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="text-white bg-[#010a36] ">
      <div className="   py-10 lg:px-[100px] px-[20px] grid gap-[100px]">
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </div>
      <Footer />
    </div>
  );
};

export default page;
