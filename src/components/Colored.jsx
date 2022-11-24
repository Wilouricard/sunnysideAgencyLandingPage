import React from "react";

export default function Colored(props) {
  return (
    <div className="relative flex flex-col md:w-1/2">
      <img src={props.image} alt="" className="md:hidden"/>
      <img src={props.imgDesktop} alt="" className="hidden md:inline-block"/>
      <div className="text-center py-16 flex flex-col gap-5 px-8 absolute top-[360px] md:px-48">
          <h1 className="text-4xl">{props.title}</h1>
          <p className="text-xl font-bold text-Very-dark-desaturated-blue">{props.text}</p>
      </div>
    </div>
  );
}