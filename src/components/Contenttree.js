"use client";
import React from "react";
import Image from "next/image";
const Contenttree = () => {
  return (
    <div className="flex bg-slate-50 bg-opacity-60 bg-current justify-center w-full h-[600px] mt-10 rounded-md">
      <div className="w-[50%] flex flex-col items-center justify-center gap-3 mt-5">
        <h1 className="text-5xl text-black mb-10">Elestia Creative Agency</h1>
        <span className="text-sm text-black font-semibold">
          Elestia Creative olarak bu güne kadar çalıştığımız markalarımız ile birçok başarıya imza attık.
        </span>

        <div className="flex flex-wrap sm:flex-nowrap mt-8 gap-12 text-blue-950 items-center justify-center">
          <div className="w-full sm:w-auto text-center sm:text-left">
            <span className="text-gray-700">
              <span className="text-5xl text-blue-700">350 k+</span>
              <br />
              Reklam yönetimi
            </span>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-left">
            <span className="text-gray-950">
              <span className="text-5xl text-blue-700">96 %</span>
              <br />
              Memnuniyet Oranı
            </span>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-left">
            <span className="text-gray-950">
              <span className="text-5xl text-blue-700">15 +</span>
              <br />
              Marka
            </span>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-left">
            <span className="text-gray-950">
              <span className="text-5xl text-blue-700">200 +</span>
              <br />
              İçerik Üretimi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contenttree;
