import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { SiEthereum } from "react-icons/si";
import { sideItems, additionalItems, myAccounts } from "./../../data/index";
import { FaAngleLeft, FaCaretDown } from "react-icons/fa";
import Account from "../account/Accountchoice";
const Dashboard = () => {
  const location = useLocation(); // Access the state passed during navigation
  const { isOpen } = location.state || {}; // Destructure the state

  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-56" : "w-12"
      } flex flex-col relative h-screen bg-slate-700 duration-500 overflow-y-auto overflow-x-hidden text-gray-300`}
    >
      <div className="flex justify-between mt-4 px-1 items-center w-full mb-4">
        <FaAngleLeft
          className={`${
            open ? "-right-5 w-6 h-6 mr-2" : "left-8 h-6 w-6"
          } absolute cursor-pointer rounded-full bg-slate-700 text-red-300 top-16 `}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <SiEthereum className="w-6 h-6" />
        {open && <h2 className="mr-16">Financini</h2>}
      </div>

      {/* Sidebar Items */}
      {sideItems.map((item) => (
        <div
          key={item.title}
          className={`${
            open && "flex justify-center"
          }flex items-center py-2 px-1  hover:bg-blue-100 cursor-pointer`}
        >
          {item.icon}
          {open && <p className="pl-4">{item.title}</p>}
        </div>
      ))}

      {/* My Accounts Section */}
      <div className="px-4">
        <h1 className="font-bold">My Accounts</h1>
        {myAccounts.map((account) => (
          <div key={account.title} className="mb-4">
            <div className="flex items-center">
              <h3 className="font-semibold pr-4">{account.title}</h3>
              <FaCaretDown className="cursor-pointer" />
            </div>
            {account.children.map((child) => (
              <div key={child.name} className="flex justify-between">
                <p>{child.name}</p>
                <p>{child.amount}$</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Additional Items */}
      <div className="flex flex-col mt-auto justify-end px-4 mb-4">
        {additionalItems.map((item) => (
          <div className="flex items-center" key={item.title}>
            {item.icon}
            {open && <p className="pl-4">{item.title}</p>}
          </div>
        ))}
      </div>
      {isOpen && <Account />}
    </div>
  );
};

export default Dashboard;
