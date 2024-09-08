import { FaTimes } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdLinkOff } from "react-icons/md";
import react, { useState } from "react";
import AddunlinkedAcount from "./AddunlinkedAcount";
import AddlinkedAccount from "./AddlinkedAccount";
// useState pour gérer la page actuelle

const Account = () => {
  // useState pour gérer la page actuelle
  const [currentPage, setCurrentPage] = useState('add-account');
  // Gestion des transitions entre les pages
  const goToLinkedProcess = () => setCurrentPage('linked-process');
  const goToLinkedValidation = () => setCurrentPage('linked-validation');
  const goToUnlinkedProcess = () => setCurrentPage('unlinked-process');
  const goToUnlinkedValidation = () => setCurrentPage('unlinked-validation');
  const goToMain = () => setCurrentPage('add-account');
  const desc1 = "Connect to your bank and automatically import transactions.";
  const desc2 = "Start with your current balance and enter your own transactions.";
  const guideInfo = "More Info please click on";
  return (

    <div className="w-full h-full z-10 absolute grid">
      {currentPage === "add-account"
      &&<div className=" place-self-center w-[25vw] h-[90vh] flex flex-col justify-start items-center bg-gray-100 p-5 border-black rounded-[20px]">
        <div className="flex items-center justify-between w-full mb-6 gap-30 ">
          <h2 className="text-xl font-semibold flex-grow text-center ml-4">
            Add Account
          </h2>
          <FaTimes className="w-8 h-8 text-purple-300 cursor-pointer" />
        </div>
        <hr className="mb-6 w-full border-t-2 border-gray-200" />

        <div className="w-full bg-purple-200 h-28 pl-8 pt-4 rounded-lg">
          <div className="flex items-center">
            <IoCloudDownloadOutline className="w-6 h-6" />
            <h2 className="pl-2 font-semibold cursor-pointer" onClick={goToLinkedProcess}  >Linked</h2>
          </div>
          <div>
            <p className="text-sm mt-2 pl-8">{desc1}</p>
          </div>
        </div>

        <div className="my-2"></div>
        <div className="flex items-center w-full">
          <hr className="flex-grow border-t-2 border-gray-200" />
          <span className="mx-2 text-gray-600">Or</span>
          <hr className="flex-grow border-t-2 border-gray-200" />
        </div>
        <div className="my-2"></div>
        <div className="w-full bg-purple-200 h-28 pl-8 pt-4 rounded-lg">
          <div className="flex items-center">
            <MdLinkOff className="w-6 h-6" />
            <h2 className="pl-2 font-semibold cursor-pointer" onClick={goToUnlinkedProcess}>Unlinked</h2>
          </div>
          <div>
            <p className="text-sm mt-2 pl-8">{desc2}</p>
          </div>
        </div>
        <div className="flex h-24 mt-4 items-baseline">
          <FaCircleInfo className="w-4 h-4" />
          <p className="pl-2">
            {guideInfo}
            <a href="Learn More" className="pl-4 text-purple-500">
              Learn More
            </a>
          </p>
        </div>
      </div>
      }
      {currentPage==='unlinked-process' &&
      <AddunlinkedAcount currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      }
      {currentPage==='linked-process' &&
      <AddlinkedAccount/>
      }
    </div>
  );
};

export default Account;
