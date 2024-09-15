import React from "react";
import { assets } from "../assets/Asset";
import { reviews } from "./../data/index";
const svgPaths = [
  { d: "M 50 200 C 200 300, 600 400, 1150 200", stroke: "#00A3FF" },
  { d: "M 50 400 C 350 300, 600 300, 1150 400", stroke: "#00A3FF" },
  { d: "M 50 180 C 200 300, 600 400, 1150 180", stroke: "#00A3FF" },
  { d: "M 50 420 C 350 300, 600 300, 1150 420", stroke: "#00A3FF" },
  { d: "M 50 160 C 200 300, 600 400, 1150 160", stroke: "#00A3FF" },
  { d: "M 50 440 C 350 300, 600 300, 1150 440", stroke: "#00A3FF" },
  { d: "M 50 140 C 200 300, 600 400, 1150 140", stroke: "#00A3FF" },
  { d: "M 50 460 C 350 300, 600 300, 1150 460", stroke: "#00A3FF" },
];

// Define the profile images and positions
const profileImages = [
  {
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    top: "65%",
    left: "10%",
  },
  {
    src: "https://randomuser.me/api/portraits/men/31.jpg",
    top: "40%",
    left: "5%",
  },
  {
    src: "https://randomuser.me/api/portraits/women/32.jpg",
    top: "50%",
    left: "30%",
  },
  {
    src: "https://randomuser.me/api/portraits/men/45.jpg",
    top: "65%",
    left: "50%",
  },
  {
    src: "https://randomuser.me/api/portraits/women/65.jpg",
    top: "50%",
    left: "70%",
  },
  {
    src: "https://randomuser.me/api/portraits/men/77.jpg",
    top: "65%",
    left: "85%",
  },
  {
    src: "https://randomuser.me/api/portraits/men/78.jpg",
    top: "40%",
    left: "85%",
  },
];

const Hero = () => {
  return (
    <>
      {/* Text section */}
      <div className="flex flex-col items-center justify-center   m-auto  overflow-x-hidden">
        <h2 className="text-3xl md:text-5xl text-white pt-28 md:pt-36 text-center font-semibold pb-3">
          The best money tracker app
        </h2>
        <p className="text-xl md:text-3xl  text-blue-400 text-center px-2">
          Navigate your finace with confidence, Track
          spending,budgets,investments,net worth.
        </p>
      </div>
      <div className="relative text-white  h-[200px] md:h-[400px] min-w-full flex flex-col justify-center items-center overflow-hidden">
        {/* SVG Curved Lines */}
        <svg
          className="absolute top-1/2 transform -translate-y-1/2 left-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 500"
          fill="none"
        >
          {svgPaths.map((path, index) => (
            <path key={index} d={path.d} stroke={path.stroke} strokeWidth="1" />
          ))}
        </svg>

        {/* Circles with Profile Images */}
        {profileImages.map((profile, index) => (
          <div
            key={index}
            className="absolute"
            style={{ top: profile.top, left: profile.left }}
          >
            <img
              src={profile.src}
              className="w-12 h-12 rounded-full border-2 border-white"
              alt={`Profile ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Review Section */}
      <div className="flex justify-center">
        <h2 className="text-white text-center mb-8 text-xl md:text-4xl font-semibold w-1/2">
          The reviews speaks for themselves
        </h2>
      </div>
      {/*our partner*/}
      <div className="px-8 mb-8 flex justify-between items-center">
        <div>
          <span className="text-white text-lg md:text-2xl">★</span>{" "}
          <span className="text-white text-lg md:text-2xl">★</span>
          <span className="text-white text-lg md:text-2xl">★</span>
          <span className="text-white text-lg  md:text-2xl">★</span>{" "}
          <span className="text-white text-lg md:text-2xl">☆</span>
        </div>
        <p className="text-white text-lg md:text-xl relative left-2 md:left-16">
          We are Trusted by
        </p>
        <div className="flex items-center px-2 md:gap-6">
          <img src={assets.bank_america} className="md:w-20 h-16 w-12 " />
          <img src={assets.bnp_bank} className="md:w-20 h-8 w-12 " />
          <img src={assets.chase} className="md:w-20 h-16 w-12 " />
        </div>
      </div>
      {/* users reviews */}
      <div className="grid  grid-cols-2 md:grid-cols-4 gap-3 mb-8 px-8">
        {reviews.map((review, index) => (
          <div key={index} className="rounded-xl bg-[#1E293B] p-2">
            <div className="flex items-center pb-2 relative">
              <img src={review.image} className="w-10 rounded-full pr-2" />
              <p className="text-white text-sm">{review.name}</p>
              <img
                className="w-8 h-6  absolute right-0"
                src={review.platform}
              />
            </div>
            <p className="text-gray-400">{review.content}</p>
          </div>
        ))}
      </div>
      {/* main page and join button */}
      <div className="m-8  max-h-[500px] overflow-hidden rounded-2xl relative">
        <img src={assets.main} className="object-cover w-full" />
        <button className="bg-gradient-to-t from-blue-300 to-slate-100 rounded-2xl px-4 py-1 text-md font-semibold hover:from-slate-100 hover:to-blue-300 transition duration-300 absolute bottom-1/4 right-4 ">
          Join us
        </button>
      </div>
    </>
  );
};

export default Hero;
