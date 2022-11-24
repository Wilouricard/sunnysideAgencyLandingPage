import React from "react";
// import Menu from "./Menu";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex justify-between px-4 pt-8 bg-cyan md:px-16">
      <button>
        <img src="\images\logo.svg" alt="" />
      </button>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src="\images\icon-hamburger.svg" alt="" className="md:hidden" />
      </button>
      <div
        className={`absolute rounded-sm top-20 flex flex-col bg-White z-20 gap-5 pb-10 text-center items-center w-11/12 ${
          open ? "inline-block" : "hidden"
        } md:inline-block md:bg-opacity-0 md:top-2`}
      >
        <div className="flex flex-row h-[30px] w-full md:hidden">
          <div className="bg-cyan h-[30px] w-11/12"></div>
          <div className=" bg-cyan h-[30px] w-1/12" id="fleche"></div>
        </div>
        <div className="flex flex-col gap-6 pt-5 md:flex-row md:gap-10 md:absolute md:right-48">
          <a
            href="#"
            className="text-xl text-Very-dark-grayish-blue font-bold hover:underline active:opacity-90 md:text-White md:text-lg"
          >
            About
          </a>
          <a
            href="#"
            className="text-xl text-Very-dark-grayish-blue font-bold hover:underline active:opacity-90 md:text-White md:text-lg"
          >
            Services
          </a>
          <a
            href="#"
            className="text-xl text-Very-dark-grayish-blue font-bold hover:underline active:opacity-90 md:text-White md:text-lg"
          >
            Projects
          </a>
        </div>
        <button className="py-4 px-8 uppercase rounded-full text-xl bg-Yellow text-Very-dark-desaturated-blue hover:opacity-90 active:shadow-lg md:bg-White md:text-lg md:py-3 md:px-6 md:absolute md:top-2 md:right-0">
          contact
        </button>
      </div>
    </nav>
  );
}
