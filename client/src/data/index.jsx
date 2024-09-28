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


export const reviews = [
  {
    name: "Luca Defreitas-Hansen",
    username: "@lucadefreitash",
    platform: "src/assets/twitter_logo.png",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    content:
      "Downloaded @copilotmoney yesterday and already love it. Have multiple cards connected and it breaks everything down and so easy to use.",
  },
  {
    name: "TylerByte",
    username: "@tylerbytes",
    platform: "src/assets/twitter_logo.png",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    content: "@copilotmoney is the best money app I’ve ever used!!",
  },
  {
    name: "Sunpreet",
    username: "@sooonpreet",
    platform: "src/assets/twitter_logo.png",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "@copilotmoney is awesome, clean design and easy to use",
  },
  {
    name: "Raven Hernandez",
    username: "@RavenSHernandez",
    platform: "src/assets/twitter_logo.png",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    content:
      "I use @copilotmoney and actually enjoy it. I’ve gotten a few friends hooked too.",
  },
  {
    name: "John D Saunders",
    username: "@johndsaunders",
    platform: "src/assets/twitter_logo.png",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    content:
      "Been using @mint for close to a decade and switched to @copilotmoney last week and DAMN. This IS the move.",
  },
  {
    name: "Ehsan Mafi",
    username: "@essonjon",
    platform: "src/assets/twitter_logo.png",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
    content: "I use @copilotmoney and I love it!",
  },
  {
    name: "Majd Taby",
    username: "@jtaby",
    platform: "src/assets/twitter_logo.png",
    image: "https://randomuser.me/api/portraits/women/57.jpg",
    content:
      "Love Copilotmoney. I’ve tried them all, and this one is the best hands down.",
  },
  {
    name: "sietedos",
    username: null,
    platform:
      "https://logo-marque.com/wp-content/uploads/2020/04/Apple-Logo.png",
    rating: 5,
    date: "11/02/2023",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    content:
      "So good and waaay better than mint! I was on mint for years, but I’m so happy I switched. Managing my finances is now fun thanks to Copilot. Amazing app and incredible support team that actually listen to their customers!",
  },
  {
    name: "David Thaten",
    username: null,
    platform:
      "https://logo-marque.com/wp-content/uploads/2020/04/Apple-Logo.png",
    rating: 5,
    date: "11/10/2023",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    content:
      "The Best Budgeting App!! Copilot has been a magical experience so far. They’ve innovated the experience of budgeting - it helps keep you informed, but the right things are automatic and effortless. You can choose how manual you’d like it to be - or how much you’d like the app to do the work for you. They’ve solved most of the gaps from mint - and it’s easy to get a budget set up.",
  },
  {
    name: "legochris100",
    username: null,
    platform:
      "https://logo-marque.com/wp-content/uploads/2020/04/Apple-Logo.png",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    rating: 5,
    date: "11/12/2023",
    content:
      "Amazing Design, Great App to Switch To I’ve used Mint and Quicken in the past, been somewhat of a power user with Quicken. I love how friendly the iPhone and Mac apps are to use, and how much effort has been spent to get the UX to feel native and clean. They’re also really quick to roll out new features, which has been awesome to see the app getting constantly better. If you’re looking for a way to track your spending and budgeting, definitely give this app a try!",
  },
  {
    name: "Filmstudio11",
    username: null,
    platform:
      "https://logo-marque.com/wp-content/uploads/2020/04/Apple-Logo.png",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    date: "11/10/2023",
    content:
      "Totally worth the subscription! This app is amazing. I never thought I would be spending money on a budgeting app but this one is worth it! This is a 5/5 app and I’m obsessed with it.",
  },
];
