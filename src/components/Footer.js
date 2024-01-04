import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-between w-full h-44 bg-slate-900">
      <div className="flex items-center  text-white m-7 text-sm">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dicta rem,
        dolores vel quaerat beatae libero fugiat aperiam repellendus voluptatum
        neque nesciunt magni inventore illum suscipit porro, optio quidem
        assumenda perferendis. Porro iste molestiae necessitatibus?
      </div>

      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 lg:pl-16 text-white m-5 text-2xl">
        <AiOutlineFacebook></AiOutlineFacebook>
        <BsInstagram></BsInstagram>
        <AiOutlineTwitter></AiOutlineTwitter>
        <BsLinkedin></BsLinkedin>
      </div>


    </div>
  );
};

export default Footer;
