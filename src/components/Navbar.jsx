import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-cyan-400 flex justify-between px-4 py-3">
      <button>
        <img src="\images\logo.svg" alt="" />
      </button>
      <button>
        <img src="\images\icon-hamburger.svg" alt="" />
      </button>
    </nav>
  );
}
