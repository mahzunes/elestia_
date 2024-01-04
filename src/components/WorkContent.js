"use client";
import React from "react";
import { FcAdvertising } from "react-icons/fc";
import { FcAreaChart } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
const WorkContent = () => {
  return (
    <div className="mt-24 w-full h-full flex justify-center items-center flex-col gap-10 bg-gray-50">
  <h1 className="mt-10 text-3xl">NELER YAPIYORUZ ? </h1>

  <div className="flex flex-wrap w-full justify-center items-center gap-10">
    <div className="w-full sm:w-[40%] lg:w-[40%] flex flex-col gap-3 mt-7 p-5 rounded-xl bg-gradient-to-r from-gray-100 via-purple-100 to-pink-50">
      <h1 className="text-3xl flex gap-3">
        Reklam Yönetimi <FcAdvertising></FcAdvertising>
      </h1>
      <p className="text-gray-900 text-sm">
        Dijital reklamlarla markanızın görünürlüğünü artırarak, daha fazla potansiyel müşteriye ulaşmanızı sağlıyoruz. Reklam kampanyalarınızı etkili bir şekilde yöneterek bütçenizi en verimli şekilde kullanıyoruz.
      </p>
    </div>

    <div className="w-full sm:w-[40%] lg:w-[40%] flex flex-col gap-3 mt-7 p-5 rounded-xl bg-gradient-to-r from-gray-100 via-purple-100 to-pink-50">
      <h1 className="text-3xl flex gap-3">
        Sosyal Medya Yönetimi{" "}
        <span className="text-blue-700">
          <FcAreaChart></FcAreaChart>
        </span>{" "}
      </h1>
      <p className="text-gray-700 text-sm">
        Sosyal medya platformlarının gücünü kullanarak markanızın sesini daha geniş kitlelere duyurmanızı sağlıyoruz. Hedef kitlenize uygun içeriklerle sosyal medyada etkileşimi artırıyoruz.
      </p>
    </div>

    <div className="w-full sm:w-[40%] lg:w-[40%] flex flex-col gap-3 mt-7 p-5 rounded-xl bg-gradient-to-r from-gray-100 via-purple-100 to-pink-50 mb-10">
      <h1 className="text-3xl flex gap-3">
        İçerik Üretimi{" "}
        <span className="text-blue-700">
          <FcAbout></FcAbout>
        </span>{" "}
      </h1>
      <p className="text-gray-700 text-sm">
        Müşterilerinizle daha derin bağlar kurmak için içerik üretiminin önemini biliyoruz. Ürün ve hizmetlerinizi en iyi şekilde tanıtan, SEO uyumlu içeriklerle markanızın farkını ortaya koyuyoruz.
      </p>
    </div>

    <div className="w-full sm:w-[40%] lg:w-[40%] flex flex-col gap-3 mt-7 p-5 rounded-xl bg-gradient-to-r from-gray-100 via-purple-100 to-pink-50 mb-10">
      <h1 className="text-3xl flex gap-3">
        Web Site Tasarımı{" "}
        <span className="text-blue-700">
          <FcServices></FcServices>
        </span>
      </h1>
      <p className="text-gray-700 text-sm">
        Web siteniz, müşterilerinizle ilk temas noktanızdır. Profesyonel ve etkileyici web tasarımı ile kullanıcı deneyimini ön planda tutuyor, potansiyel müşterilerinizi sadık müşterilere dönüştürüyoruz.
      </p>
    </div>
  </div>
</div>

  );
};

export default WorkContent;
