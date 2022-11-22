import React from "react";
// import Menu from "./Menu";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-cyan-400 flex justify-between px-4 py-3">
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
      <div className={`absolute top-20 flex flex-col bg-white z-20 gap-5 py-10 text-center items-center w-11/12 ${
            open ? "inline-block" : "hidden"}`}>
        <div className="flex flex-col gap-6">
          <a href="#" className="text-xl text-slate-500 font-bold">
            About
          </a>
          <a href="#" className="text-xl text-slate-500 font-bold">
            Services
          </a>
          <a href="#" className="text-xl text-slate-500 font-bold">
            Projects
          </a>
        </div>
        <button className="bg-yellow-300 py-3 px-8 uppercase rounded-full text-xl">
          contact
        </button>
      </div>
    </nav>
  );
}
