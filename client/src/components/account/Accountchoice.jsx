import { FaTimes } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdLinkOff } from "react-icons/md";
import React, { useState } from "react";
import LinkedAccount from "./LinkedAccount";
import UnlinkedAccount from "./UnlinkedAccount";

const AccountChoice = ({ onComplete }) => {
  const desc1 = "Connect to your bank and automatically import transactions.";
  const desc2 =
    "Start with your current balance and enter your own transactions.";
  const guideInfo = "More Info please click on";

  const [accountType, setAccountType] = useState(""); // State to hold account type
  const [showAccountChoice, setShowAccountChoice] = useState(true); // State for visibility

  const handleAccountClick = (type) => {
    setAccountType(type); // Set the account type
    setShowAccountChoice(false); // Close AccountChoice
  };

  // Function to handle closing the linked/unlinked account component
  const handleClose = () => {
    setAccountType(""); // Reset account type
    setShowAccountChoice(true); // Show AccountChoice again
  };

  return (
    <>
      {!showAccountChoice && accountType === "linked" && (
        <LinkedAccount onClose={handleClose} onComplete={onComplete} /> // Render LinkedAccount
      )}
      {!showAccountChoice && accountType === "unlinked" && (
        <UnlinkedAccount onClose={handleClose} /> // Render UnlinkedAccount
      )}

      {showAccountChoice && (
        <div className="m-4 w-[25vw] h-full flex flex-col justify-start items-center bg-white p-5 border-black rounded-[20px] shadow-lg z-50">
          <div className="flex items-center justify-between w-full mb-6">
            <h2 className="text-xl font-semibold flex-grow text-center ml-4">
              Add Account
            </h2>
          </div>
          <hr className="mb-6 w-full border-t-2 border-gray-200" />

          {/* Linked Account */}
          <div
            className="w-full bg-blue-300 h-28 pl-8 py-4 pr-4 rounded-lg cursor-pointer"
            onClick={() => handleAccountClick("linked")} // Pass type to the handler
          >
            <div className="flex items-center">
              <IoCloudDownloadOutline className="w-6 h-6" />
              <h2 className="pl-2 font-semibold">Linked</h2>
            </div>
            <p className="text-sm mt-2 pl-8">{desc1}</p>
          </div>

          <div className="my-2"></div>
          <div className="flex items-center w-full">
            <hr className="flex-grow border-t-2 border-gray-200" />
            <span className="mx-2 text-gray-600">Or</span>
            <hr className="flex-grow border-t-2 border-gray-200" />
          </div>
          <div className="my-2"></div>

          {/* Unlinked Account */}
          <div
            className="w-full bg-blue-300 h-28 pl-8 py-4 rounded-lg cursor-pointer"
            onClick={() => handleAccountClick("unlinked")} // Pass type to the handler
          >
            <div className="flex items-center">
              <MdLinkOff className="w-6 h-6" />
              <h2 className="pl-2 font-semibold">Unlinked</h2>
            </div>
            <p className="text-sm mt-2 pl-8">{desc2}</p>
          </div>

          <div className="flex h-24 mt-4 items-baseline">
            <FaCircleInfo className="w-4 h-4" />
            <p className="pl-2">
              {guideInfo}
              <a href="Learn More" className="pl-2 text-blue-500">
                Learn More
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountChoice;
