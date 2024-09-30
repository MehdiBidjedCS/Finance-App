import React, { useState } from "react";
import Dashboard from "./../components/home/Dashbord";
import AccountChoice from "../components/account/Accountchoice";

const Home = () => {
  const [showAccountChoice, setShowAccountChoice] = useState(true); // State to show/hide AccountChoice

  // Function to hide AccountChoice after completing account choice
  const handleComplete = () => {
    setShowAccountChoice(false);
  };

  return (
    <div className="relative">
      {/* Dashboard content (background) */}
      <Dashboard />

      {/* AccountChoice as overlay */}
      {showAccountChoice && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center ">
          <AccountChoice onComplete={handleComplete} />
        </div>
      )}
    </div>
  );
};

export default Home;
