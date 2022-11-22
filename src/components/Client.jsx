import React from "react";

export default function Client(props) {
  return (
    <div className="text-center flex flex-col gap-6 px-16 pb-20">
      <img
        src={props.image}
        alt=""
        className="rounded-full w-1/4 mr-auto ml-auto"
      />
      <p>
        {props.text}
      </p>
      <div>
        <h1>{props.who}</h1>
        <p>{props.position}</p>
      </div>
    </div>
  );
}
