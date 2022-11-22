import React from "react";

export default function Article(props) {
  return (
    <div className="flex flex-col">
      <img src={props.image} alt="" />
      <div className="text-center py-16 flex flex-col gap-5 px-8">
          <h1 className="text-4xl">{props.title}</h1>
          <p className="text-xl">{props.text}</p>
          <a href="#">
            <h2 className="uppercase underline decoration-yellow-200 decoration-4 underline-offset-0">
              Learn more
            </h2>
          </a>
      </div>
    </div>
  );
}
