import React, { useState } from "react";
import { assets } from "../assets/Asset.js";
import { useDispatch, useSelector } from "react-redux";
import { is_Authentificated } from "./../redux/reducers/authSlicer.js";
import { login } from "../redux/api/authApi.js";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.is_Authentificated);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      username: email,
      password: password,
    };

    const response = await login(credentials);

    if (response?.status === 200) {
      dispatch(is_Authentificated());
      console.log(isAuth);
      setErrorMessage(""); // Clear error if login successful
      navigate("/home");
    } else {
      // Set the backend error message in the state
      console.log(response);
      setErrorMessage(response.error || "An unknown error occurred.");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex items-center min-h-screen m-4">
      <div className="flex w-full md:w-1/2 bg-white border-black rounded-[20px] p-4 mx-auto justify-center">
        <form className="flex flex-col mr-4" onSubmit={handleSubmit}>
          <div className="w-full bg-white rounded-t-[20px] flex justify-start items-center">
            <b className="p-5 ml-2 text-3xl">Get Started</b>
          </div>
          <p className="text-sm">
            Welcome to our app, Let's create your account:
          </p>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}{" "}
          {/* Display backend error */}
          <input
            name="email"
            placeholder="email"
            value={email} // Bind value to email state
            className="outline-none hover:outline-blue-400 rounded-xl p-2 my-4"
            required
            onChange={handleEmail} // Update state on change
          />
          <input
            name="password"
            placeholder="password"
            value={password} // Bind value to password state
            type="password"
            className="outline-none hover:outline-blue-400 rounded-xl p-2"
            required
            onChange={handlePassword} // Update state on change
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
