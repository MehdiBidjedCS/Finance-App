import React, { useState } from "react";
import Dashboard from "./../components/home/Dashbord";
import AccountChoice from "../components/account/Accountchoice";
import { Routes, Route } from "react-router-dom";
import Transactions from "../pages/Transactions";
import Accounts from "../pages/Accounts";
import DashBoard from "../pages/DashBoard";
import Investments from "../pages/Investments";
import Category from "../pages/Category";


const Home = () => {
  const [showAccountChoice, setShowAccountChoice] = useState(true); // State to show/hide AccountChoice

  // Function to hide AccountChoice after completing account choice
  const handleComplete = () => {
    setShowAccountChoice(false);
  };

  return (
    <div className="flex">
      {/* Dashboard content (background) */}
      <Dashboard />
      {/* AccountChoice as overlay */}
      <div >
        {/* Display AccountChoice overlay until user completes it */}
        {showAccountChoice && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center ">
            <AccountChoice onComplete={handleComplete} />
          </div>
        )}

        {/* Dynamic Routes */}
        {!showAccountChoice && (
          <Routes>
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        )}
      </div>
     
    </div>
  );
};

export default Home;
