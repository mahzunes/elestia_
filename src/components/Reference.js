import React from "react";
import { data } from "./referance_data";

const Reference = () => {
  return (
    <div className="w-full flex-col mt-24 ">
      <h1 className="mb-12 flex items-center justify-center font-bold text-3xl text-blue-700 ">
        Our References
      </h1>

      <div className="flex justify-around">
        {data.map((item) => (
          <img key={item.id} className=" w-16 md:w-32 lg:w-48" src={item.image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Reference;
