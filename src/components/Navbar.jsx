import React from "react";
// import Menu from "./Menu";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex justify-between px-4 pt-8 bg-cyan">
      <button>
        <img src="\images\logo.svg" alt="" />
      </button>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src="\images\icon-hamburger.svg" alt="" />
      </button>
      <div
        className={`absolute rounded-sm top-20 flex flex-col bg-White z-20 gap-5 pb-10 text-center items-center w-11/12 ${
          open ? "inline-block" : "hidden"
        }`}
      >
        <div className="flex flex-row h-[30px] w-full">
          <div className="bg-cyan h-[30px] w-11/12"></div>
          <div className=" bg-cyan h-[30px] w-1/12" id="fleche"></div>
        </div>
        <div className="flex flex-col gap-6 pt-5">
          <a
            href="#"
            className="text-xl text-Very-dark-grayish-blue font-bold hover:underline active:opacity-90"
          >
            About
          </a>
          <a
            href="#"
            className="text-xl text-Very-dark-grayish-blue font-bold hover:underline active:opacity-90"
          >
            Services
          </a>
          <a
            href="#"
            className="text-xl text-Very-dark-grayish-blue font-bold hover:underline active:opacity-90"
          >
            Projects
          </a>
        </div>
        <button className="py-4 px-8 uppercase rounded-full text-xl bg-Yellow text-Very-dark-desaturated-blue hover:opacity-90 active:shadow-lg">
          contact
        </button>
      </div>
    </nav>
  );
}
