import React from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { FooterLink } from '../data/FooterLinks';

type Props = {}

const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {FooterLink.map((link, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-2">{link.title}</h3>
              <ul>
                {link.name1 && <li><a href="#">{link.name1}</a></li>}
                {link.name2 && <li><a href="#">{link.name2}</a></li>}
                {link.name3 && <li><a href="#">{link.name3}</a></li>}
                {index === 4 && (
                  <li>
                    <a href="#">
                      <FaGooglePlay className="mr-2" />
                      GETITON
                    </a>
                  </li>
                )}
                {index === 4 && (
                  <li>
                    <a href="#">
                      <FaApple className="mr-2" />
                      Download on the
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          ©2022 Copyright
          <span className="ml-2">All Rights Reserved</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;