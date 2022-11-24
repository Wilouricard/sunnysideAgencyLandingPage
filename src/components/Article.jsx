import React from "react";

export default function Article(props) {
  return (
    <div className={`flex flex-col md:flex-row${props.row}`}>
      <img src={props.image} alt="" className="md:w-1/2"/>
      <div className="text-center py-16 flex flex-col gap-5 px-8 md:text-start md:justify-center md:px-40 md:w-1/2">
          <h1 className="text-4xl">{props.title}</h1>
          <p className="text-xl font-bold">{props.text}</p>
          <a href="#">
            <h2 className={`uppercase underline underline-offset-0 ${props.color} font-bold decoration-4 hover:opacity-90 active:decoration-8`}>
              Learn more
            </h2>
          </a>
      </div>
    </div>
  );
}
