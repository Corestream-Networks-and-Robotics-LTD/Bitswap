import React from "react";
import Header from "./Components/Header";
import Discover from "./Components/Discover";
import Figure from "./Components/Figure";
import Footer from "./Components/Footer";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" text-black bg-[#010a36]">
      <Header />
      <Discover />
      <Figure />
      <Footer />
    </div>
  );
};

export default page;
