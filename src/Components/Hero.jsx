import React from 'react'
import {ChardOne, BsStarFill} from '../constants/index'

const Hero = () => {
  return (
    <section className="px-20 min-h-screen flex items-center relative">

    <div className="border absolute inset-0 flex justify-center items-center -z-20">
      <BsStarFill className="text-purple-300 mt-32 " />
      <BsStarFill className="h-20 w-20 text-purple-400" />
    </div>

    <div className="w-full h-full flex items-center justify-between">
      <div className="text-8xl">
        <h2 className="flex flex-col">
          CUSTOM SKIN
          <span>FOR YOUR</span>
          <span>CARD</span>
        </h2>
      </div>

      <div className="">
        <ChardOne />
      </div>
    </div>
  </section>
  )
}

export default Hero