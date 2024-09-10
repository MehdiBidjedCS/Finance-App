import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IoIosArrowBack } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';

function Validation({ currentPage, setCurrentPage }) {
  return (
    <div className='w-full h-full z-10 absolute grid'>
      <div className='place-self-center w-[25vw] h-[90vh] flex flex-col justify-start items-center border-black border-2 rounded-[20px]'>
        <div className="flex items-center justify-between w-full h-1/8 text-black rounded-[20px] p-5">
          {/*header */}
          <div className='mr-4 w-5 h-5'></div>
          <h2 className="text-xl font-semibold flex-grow text-center">Add Unlinked Account</h2>
          <FaTimes className="ml-4 w-5 h-5 text-purple-600 cursor-pointer" />
        </div>
        <div className='w-full h-3/4 flex flex-col  justify-center items-center   '>
        {/* body */}
          <CheckCircleIcon color='success' sx={{ fontSize: 70 }} />
          <span>Seccess !</span>
          <p className='p-5 text-lg flex justify-center items-center text-center size-15'>Lorem ipsum dolor,sit amet consectetur inventore laudantium earum excepturi quibusdam sint soluta,itaque explicabo consequuntur deleniti omnis autem est alias</p>
        </div>
        <div className='w-full  h-1/5  flex justify-between items-center gap-2 rounded-bl-[20px] rounded-br-[20px] p-1'>
          {/* footer */}
          <button className='border border-white bg-blue-100 w-1/2 h-2/4 rounded-[10px] cursor-pointer'> Add Another</button>
          <button className='border border-white bg-blue-700 w-1/2 h-2/4 rounded-[10px] text-white text-xl cursor-pointer '>Done</button>
        </div>
      </div>
    </div>
  )
}

export default Validation