import Image from "next/image";
import React from "react";
import { BiBoltCircle } from "react-icons/bi";

const Contenttwo = () => {
  return (
    <div className="w-full flex mt-8 items-center justify-center ">
      <div className="w-full sm:w-[50%]">
        <Image src="/data.png" width={530} height={100}></Image>
      </div>
      <div className="flex w-full sm:w-[40%] flex-col items-center justify-center">
        <h1 className="text-4xl text-blue-700 mb-5 font-bold">
          Verileri okuyamayan başarılı olamaz
        </h1>
        <span className="text-sm text-gray-600 mb-5">
          Reklam verilerini düzgün okumak daha çok dönüş almaya ve satışları
          arttırmaya yarar.
        </span>
        <ul className=" ">
          <li className="mb-2 text-gray-900 flex gap-3">
            <span className="text-xl text-blue-700">
              <BiBoltCircle></BiBoltCircle>
            </span>
            Roas değerinizi arttırmak için profesyonel ekiplerden yardım almak
            gerekir.
          </li>
          <li className="mb-2 text-gray-900 flex gap-3">
            <span className="text-xl text-blue-700">
              <BiBoltCircle></BiBoltCircle>
            </span>
            Doğru büyüme stratejisi ile yatırım getirinizi arttırmak mümkündür.
          </li>
          <li className="mb-2 text-gray-900  flex gap-3">
            <span className="text-xl text-blue-700">
              <BiBoltCircle></BiBoltCircle>
            </span>
            Ctr oranınızı arttırmak aslında çok da zor değil. Önemli olan
            yaratıcı içeriklerdir.
          </li>
          <li className="mb-2 text-gray-900 flex gap-3">
            <span className="text-xl text-blue-700">
              <BiBoltCircle></BiBoltCircle>
            </span>
            Siz de reklamlarınızda performansı arttırmak istiyorsanız bize
            ulaşabilirsiniz!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contenttwo;
