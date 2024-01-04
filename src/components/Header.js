import Image from "next/image";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between items-center m-10">
      <div>
        <Image src="/logotwo.png" width={150} height={100}></Image>
      </div>

      <div className="text-xl">
        <ul className="flex gap-12">
          <li className="hover:text-blue-600 hover:border-b-2 hover:ease-in duration-100 hover:border-blue-600">
            Ana Sayfa
          </li>
          <li className="hover:text-blue-600 hover:border-b-2 hover:ease-in duration-100 hover:border-blue-600">
            Hakkımızda
          </li>
          <li className="hover:text-blue-600 hover:border-b-2 hover:ease-in duration-100 hover:border-blue-600">
            İletişim
          </li>
        </ul>
      </div>

      <a
        href="https://wa.me/905309912041"
        className="fixed bottom-14 right-5 rounded-full text-center shadow-lg z-50 bg-green-600 text-white border p-4 md:p-5 hover:bg-white hover:text-green-600 hover:ease-in duration-200"
      >
        <button className="flex items-center gap-3">
          <span className="text-3xl md:text-4xl">
            <BsWhatsapp></BsWhatsapp>
          </span>
        </button>
      </a>
    </div>
  );
};

export default Header;