import React from "react";
import CustomLink from "./CustomLink"; // Adjust the path based on your file structure
import { NavLink } from "../data/NavLink";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="container w-full  text-white grid grid-cols-2 py-6">
      <div>

      </div>

      <div className="flex gap-3  ">
        {NavLink.map((nav, index) => (
          <CustomLink href="/" title={nav.name} key={index} className="" />
        ))}
      </div>
    </nav>
  );
};

export default Header;
