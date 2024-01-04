import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center bg-white p-10 ">
      <h1 className="text-2xl md:text-4xl mt-10 font-bold text-gray-700">SİZE ULAŞALIM</h1>
      <div className="flex flex-col md:flex-row mt-10 md:mt-20">
        <div className="w-full md:w-1/2 flex items-center justify-center pr-0 md:pr-16 pb-10 md:pb-20">
          <Image src="/live.gif" width={400} height={100}></Image>
        </div>
        <div className="flex flex-col gap-7 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Adınızı Soyadınızı giriniz"
            className="p-3 w-full md:w-80 border-b border-gray-600 text-black rounded-xl placeholder:text-gray-900 placeholder:font-semibold"
          />
          <input
            type="text"
            placeholder="Şirket İsminizi giriniz"
            className="p-3 w-full md:w-80 border-b border-gray-600 text-black rounded-xl placeholder:text-gray-900 placeholder:font-semibold"
          />
          <input
            type="text"
            placeholder="Telefon Numaranızı giriniz"
            className="p-3 w-full md:w-80 border-b border-gray-600 text-black rounded-xl placeholder:text-gray-900 placeholder:font-semibold"
          />
          <input
            type="text"
            placeholder="E-posta adresinizi giriniz"
            className="p-3 w-full md:w-80 border-b border-gray-600 text-black rounded-xl placeholder:text-gray-900 placeholder:font-semibold"
          />

          <button className="flex justify-center items-center border border-gray-500 bg-gray-700 text-white p-3 w-full md:w-[50%] rounded-full hover:bg-white hover:text-gray-700 font-semibold">
            Gönder
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
