import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FooterLink } from "../data/FooterLinks";
import DownloadBtn from "./DownloadBtn";
import { DownloadBtnData } from "../data/DownloadBtnData";

type Props = {};

const Footer = () => {
  return (
    <footer className=" text-white ">
      <div className="py-10 px-[100px] grid gap-5">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-4  ">
          {FooterLink.map((link, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-2 underline">{link.title}</h3>
              <ul className="">
                {link.name1 && (
                  <li>
                    <a href="#">{link.name1}</a>
                  </li>
                )}
                {link.name2 && (
                  <li>
                    <a href="#">{link.name2}</a>
                  </li>
                )}
                {link.name3 && (
                  <li>
                    <a href="#">{link.name3}</a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <h1 className="text-gray-200 text-md">
            DOWNLOAD &amp; CONNECT WITH US
          </h1>
          <div className="flex md:flex-row flex-col gap-5">
            {DownloadBtnData.map((data, index) => (
              <DownloadBtn
                icon={<data.icon className="text-[35px]" />}
                text={data.text}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 text-center bg-black w-full p-4">
        ©2022 Copyright
        <span className="ml-2">All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
