import React from "react";
const AccountType = ({ Icon, title, description }) => {
  return (
    <div className="w-full bg-purple-200 h-28 pl-8 pt-4 rounded-lg">
      <div className="flex items-center">
        <Icon className="w-6 h-6" />
        <h2 className="pl-2 font-semibold">{title}</h2>
      </div>
      <div>
        <p className="text-sm mt-2 pl-8 ">{description}</p>
      </div>
    </div>
  );
};

export default AccountType;
