import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col">
        <h1 className="uppercase text-center font-bold text-White bg-transparent text-5xl tracking-[4px] pt-20 absolute md:right-1/3">We are creatives</h1>
        <img src="\images\icon-arrow-down.svg" alt="" className="bg-transparent absolute top-[380px] right-1/2 md:top-[450px]" />
      <img src="\images\mobile\image-header.jpg" alt="" className="md:hidden"/>
      <img src="\images\desktop\image-header.jpg" alt="" className="hidden md:inline-block"/>
      <img src="" alt="" />
    </div>
  );
}
