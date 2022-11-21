import React from "react";

export default function Colored(props) {
  return (
    <div className="">
      <img src={props.image} alt="" className=""/>
      <div className="text-center py-16 flex flex-col gap-5 px-8">
          <h1 className="text-4xl">{props.title}</h1>
          <p className="text-xl">{props.text}</p>
      </div>
    </div>
  );
}