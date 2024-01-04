"use client";
import Image from "next/image";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Content = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-[500px] md:h-auto">
      <div className="flex md:w-[50%] justify-center mt-24 text-4xl">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">
            <span className="font-bold text-5xl text-gray-800 ">ELESTİA</span>{" "}
            <span className="text-gray-800">İLE</span> <br />{" "}
            <span className="text-blue-700"> MARKANIZI YARATALIM</span>
          </h1>
          <p className="text-sm text-[#7A7A7A] font-bold ml-1">
            Profesyonel reklam yönetimi ile dikkat çekici içeriklerinizi; <br />
            doğru hedef kitleye, minimum maliyetle gösterelim!
          </p>

          <a
            href="https://wa.me/905309912041"
            className="bg-white w-40 text-lg font-bold animate-bounce border-blue-500 border-2 p-2 text-blue-600 hover:bg-blue-500 hover:text-white hover:ease-in duration-200"
          >
            <button className="flex items-center gap-3 font-bold">
              Bize Ulaşın{" "}
              <span>
                <BsWhatsapp></BsWhatsapp>
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="w-[50%] md:order-first">
        <Image src="/contenttwo.png" width={500} height={100}></Image>
      </div>
    </div>
  );
};

export default Content;
