import React from "react";
import { assets } from "../assets/Asset";
import { FaRegCopyright } from "react-icons/fa6";

const About = () => {
  return (
    <div className="mt-8 mb-8  grid grid-cols-1 md:flex px-8 md:justify-between w-full">
      <div className="flex flex-col items-center md:items-start">
        <div className="flex justify-center md:flex gap-2 mb-4 ">
          {" "}
          <img src={assets.icons_logo} className="w-8 h-8  " alt="Logo" />
          {/* App Name */}
          <h2 className="text-blue-400 tracking-tight text-xl font-semibold">
            Financiny
          </h2>
        </div>
        {/* copyright */}
        <div className="flex flex-col md:flex-row items-center  text-center mb-4 ">
          <FaRegCopyright className="text-gray-500 mr-1 mt-1" />
          <p className="text-gray-500 tracking-tighter text-sm">
            Copyright 2024 Financiny , Thanks to our CEO hchaychi & 3isawa
          </p>
        </div>
      </div>
      {/* about items */}
      <div className="sm:grid  sm:place-items-center md:place-items-start space-y-2  md:flex md:justify-between md:w-1/2">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white">Explore</h2>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Features
          </p>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Pricing
          </p>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Reviews
          </p>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Team
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white">Useful links</h2>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Privacy & Security
          </p>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Help Center
          </p>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Terms of use
          </p>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Privacy policy
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-white">More about copilot</h2>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Inteligence
          </p>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Changelog
          </p>
          <p className="text-blue-400 text-sm py-0.5 hover:cursor-pointer">
            Careers
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
