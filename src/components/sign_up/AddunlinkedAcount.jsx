import React from 'react'
import { FaTimes } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

function AddunlinkedAcount() {

  const text="got ! And don't worry --if you change your mind. you can link your account your at any time. "  
  return (
   
   
    <div className='w-full h-full z-10 absolute grid'>  
    {/*global */}
        <div className=" place-self-center w-[25vw] h-[90vh] flex flex-col justify-start items-center  border-black border-2 rounded-[20px]"> 
            {/*container */}
            <div className='flex items-center justify-between w-full h-1/6 text-black rounded-[20px] p-5'>
            {/*header */}
                <IoIosArrowBack className=' mr-4 w-5 h-5 text-purple-600'/>
                <h2 className='text-xl font-semibold flex-grow text-center'>Add Unlinked Account</h2>
                <FaTimes className='ml-4 w-5 h-5 text-purple-600'/>
                
            </div>
            <div className='w-full p-2 text-sm align-center'>
                {/*text to start*/}
                <span className='font-bold'>Let's </span>
                {text}
            </div>
            <div className='flex flex-col items-start w-full gap-[10px]'>
                {/*inputs */}
                <p>Giv it a nickname</p>
                <input type="text"  placeholder='nickname' required  className='outline-none border border-[#202020] p-[5px] rounded-[4px]'/>
                <label htmlFor="combo">Choisissez une option :</label>
     
                
            </div>
        <div>
            
         </div>   

        </div>

    </div>
  )
}

export default AddunlinkedAcount