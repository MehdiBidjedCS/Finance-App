import React, { useState } from "react";
import { assets } from "../assets/Asset.js";
import { useDispatch, useSelector } from "react-redux";
import { is_Authentificated } from "./../redux/reducers/authSlicer.js";
import { login } from "../redux/api/authApi.js";

function Signup() {
  const dispatch = useDispatch();
  const isAuthentificated = useSelector(
    (state) => state.auth.is_Authentificated
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmit, setisSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    const { error, data } = await login(credentials); // Pass the dispatch to update the Redux store

    if (!error) {
      console.log("Logged in successfully:", data);
      // Optionally redirect or show success message
    } else {
      console.error("Login failed:", error);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex items-center  min-h-screen m-4">
      <div className="flex  w-full md:w-1/2 bg-white border-black rounded-[20px] p-4 mx-auto justify-center">
        <form className="flex flex-col mr-4" onSubmit={handleSubmit}>
          <div className="w-full bg-white rounded-t-[20px] flex justify-start items-center">
            <b className="p-5 ml-2 text-3xl">Get Started</b>
          </div>
          <p className="text-sm">
            Welcome to our app, Let's create your account:
          </p>
          <input
            name="email"
            placeholder="email"
            type="email"
            className="outline-none hover:outline-blue-400 rounded-xl p-2 my-4"
            required
            onChange={handleEmail}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            className="outline-none hover:outline-blue-400 rounded-xl p-2"
            required
            onChange={handlePassword}
          />
          <button type="submit" className="mt-4 bg-blue-500 rounded-xl p-2">
            Sign In
          </button>
        </form>
        <div>
          <img src={assets.sign_up} alt="Sign Up" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
