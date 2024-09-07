import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
const AccountInfo = () => {
  const guideInfo = "More Info please click on";

  return (
    <div className="flex h-24 mt-4 items-baseline">
      <FaCircleInfo className="w-4 h-4" />
      <p className="pl-2">
        {guideInfo}
        <a href="Learn More" className="pl-4 text-purple-500">
          Learn More
        </a>
      </p>
    </div>
  );
};

export default AccountInfo;
