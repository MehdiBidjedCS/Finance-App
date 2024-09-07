import React from "react";
import { FaTimes } from "react-icons/fa";
import AccountType from "./Accounttype";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdLinkOff } from "react-icons/md";
import AccountInfo from "./AccountInfo";
const Account = () => {
  const desc1 = "Connect to your bank and automatically import transactions.";
  const desc2 =
    "Start with your current balance and enter your own transactions.";

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-1/4 h-full flex flex-col justify-center items-center bg-gray-100 ">
        <div className="flex items-center justify-between w-full mb-6 ">
          <h2 className="text-xl font-semibold flex-grow text-center ml-4">
            Add Account
          </h2>
          <FaTimes className="w-8 h-8 text-purple-300 cursor-pointer" />
        </div>
        <hr className="mb-6 w-full border-t-2 border-gray-200" />
        <AccountType
          Icon={IoCloudDownloadOutline}
          title={"Linked"}
          description={desc1}
        />
        <div className="my-2"></div>
        <div className="flex items-center w-full">
          <hr className="flex-grow border-t-2 border-gray-200" />
          <span className="mx-2 text-gray-600">Or</span>
          <hr className="flex-grow border-t-2 border-gray-200" />
        </div>
        <div className="my-2"></div>
        <AccountType Icon={MdLinkOff} title={"Unlinked"} description={desc2} />
        <AccountInfo />
      </div>
    </div>
  );
};

export default Account;
