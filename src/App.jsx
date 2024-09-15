import "./index.css";
import Signup from "./components/sign_up/Signup";
import Account from "./components/sign_up/Accountchoice";
import AddunlinkedAcount from "./components/sign_up/UnlinkedAccount";
import LinkedAccount from "./components/sign_up/LinkedAccount";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import First from "./components/First";
import Hero from "./components/Hero";
import About from "./components/About";
function App() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-slate-950">
        <First />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;