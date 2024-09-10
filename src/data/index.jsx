import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { MdCreditCard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoMdHelpCircleOutline } from "react-icons/io";

export const sideItems = [
  { title: "Dashbord", icon: <RxDashboard /> },
  { title: "Transactions", icon: <GrTransaction /> },
  { title: "Accounts", icon: <MdCreditCard /> },
  { title: "Investments", icon: <FaChartLine /> },
  { title: "Category", icon: <BiCategory /> },
];

export const additionalItems = [
  { title: "Get help", icon: <IoMdHelpCircleOutline /> },
  { title: "Settings", icon: <IoSettingsOutline /> },
];
export const myAccounts = [
  {
    title: "creditCard",
    children: [
      { name: "credit card", amount: 3000 },
      { name: "credit card", amount: 2000 },
    ],
  },
  {
    title: "Depository",
    children: [
      { name: "Savings", amount: 1000 },
      { name: "check", amount: 1000 },
    ],
  },
  {
    title: "Investment",
    children: [
      { name: "Banking", amount: 600 },
      { name: "Stocks", amount: 30000 },
    ],
  },
];
