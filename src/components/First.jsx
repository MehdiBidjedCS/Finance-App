import React from "react";
import { assets } from "./../assets/Asset";

const First = () => {
  return (
    <>
      <div className="px-8 py-4 flex items-center bg-transparent justify-between fixed w-full top-0 left-0 z-50">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img
            src={assets.icons_logo}
            className="w-8 h-8 text-white"
            alt="Logo"
          />
          {/* App Name */}
          <h2 className="text-white tracking-tight text-xl font-semibold">
            Financiny
          </h2>
        </div>
        {/* Login Button */}
        <button className="bg-gradient-to-t from-blue-300 to-slate-100 rounded-2xl px-4 py-1 text-md font-semibold hover:from-slate-100 hover:to-blue-300 transition duration-300">
          Login
        </button>
      </div>
    </>
  );
};

export default First;
