import React from "react";
import { CardImg, BsRocketFill } from "../constants";

const ChardOne = () => {
  return (
    <section className=" rounded-xl w-80 overflow-hidden relative shadow shadow-black">

      <div className="absolute top-1 right-1 z-20 rounded-full h-6 w-28 bg-white text-black font-bold flex items-center justify-center gap-2"
      style={{fontFamily:"monospace"}}
      >
        Chila
        <BsRocketFill className="text-black h-4 w-4 "/>
      </div>

      <div className="absolute bottom-1 right-1 z-20 rounded-full h-20 w-4 bg-white text-black"></div>

      <div className="absolute bottom-1 right-6 z-20 rounded-full h-10 w-4 bg-white"></div>

      <div className="absolute inset-0 z-50 text-white flex items-center justify-center">
        <h2
          className="flex flex-col text-7xl "
          style={{ fontFamily: "monospace" }}
        >
          <span className="ml-20">Build</span>
          <span className="ml-6">For </span>
          <span className="text-4xl">You
            <BsRocketFill/>
          </span>
        </h2>
      </div>

      <div className="blur-[3px]">
        <img src={CardImg} alt="Process" className="object-cover" />
      </div>
    </section>
  );
};

export default ChardOne;
