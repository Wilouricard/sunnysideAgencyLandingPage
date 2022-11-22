import React from "react";

export default function Client(props) {
  return (
    <div className="text-center flex flex-col gap-6 px-16 pb-20">
      <div className="w-[90px] h-[90px] rounded-full mr-auto ml-auto">
        <img src={props.image} alt="" className="rounded-full" />
      </div>
      <p>{props.text}</p>
      <div>
        <h1>{props.who}</h1>
        <p>{props.position}</p>
      </div>
    </div>
  );
}
