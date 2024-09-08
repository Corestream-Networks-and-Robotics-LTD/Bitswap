"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import CustomLink from "./CustomLink";
import { NavLink } from "../data/NavLink";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex text-white">
      <div className="md:w-[40%] "></div>

      <div className="hidden lg:flex gap-3">
        {NavLink.map((nav, index) => (
          <CustomLink
            href={nav.href}
            title={nav.name}
            key={index}
            className="font-medium"
          />
        ))}
      </div>

      <button
        className="block lg:hidden p-4 focus:outline-none absolute top-0 right-0 "
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black z-50 p-5 md:hidden">
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={handleMenuToggle}
          >
            <FaTimes />
          </button>
          <div className="flex flex-col items-center mt-10 gap-5">
            {NavLink.map((nav, index) => (
              <CustomLink
                href={nav.href}
                title={nav.name}
                key={index}
                className="font-medium text-[20px] font-poppins"
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
