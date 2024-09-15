import React,{useState} from "react";
import { assets } from "../../assets/Asset.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [isSubmit, setisSubmit] = useState(false);

  const handleSubmit = () => {
    setisSubmit(true);
  };
  return (
    <div className="w-full h-full z-10 absolute grid">
      <form className="place-self-center w-[60vw] h-[70vh] bg-white flex flex-col border border-black rounded-[20px]">
        <div className="w-full h-[14%] bg-white rounded-t-[20px] flex justify-start items-center">
          <b className="p-5 ml-2 text-[25px]">Get Started</b>
        </div>
        <div className="w-full h-full rounded-b-[20px] flex justify-around items-center">
          <div className="mt-[60px] ml-[50px] w-[60%] h-full flex flex-col items-start gap-[10px]">
            <p>Welcome to our app, Let's create your account :</p>
            <hr />
            <div className="flex flex-col items-start gap-[10px]">
              <p>Email :</p>
              <input
                className="outline-none border border-[#c9c9c9] p-[5px] rounded-[4px]"
                type="text"
                placeholder="Emai"
                required
              />
              <p>Password :</p>
              <input
                className="outline-none border border-[#c9c9c9] p-[5px] rounded-[4px]"
                type="text"
                placeholder="Password"
                required
              />
              <div className="flex justify-between gap-[10px] p-[5px]">
                <input
                  className="outline-none border border-[#c9c9c9]  rounded-[4px]"
                  type="checkbox"
                  required
                />
                <p>
                  by continuing , I agree to the terms of use & privacy policy.
                </p>
              </div>
              <button
                className="border-none w-[100px] p-[10px] text-center rounded-[4px] text-white bg-purple-600 text-[15px] cursor-pointer"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="h-full">
            <img
              className="w-full h-[80%] rounded-b-[20px]"
              src={assets.sign_up}
              alt=""
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;