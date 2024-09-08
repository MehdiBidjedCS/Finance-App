import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Validation() {
  return (
    <div className='w-full h-full z-10 absolute grid'>
        <div className='place-self-center w-[25vw] h-[90vh] flex flex-col justify-start items-center border-black border-2 rounded-[20px]'>

          <div className='w-full h-1/2 flex flex-col gap-8 justify-center items-center  mt-8  '>
            <CheckCircleIcon color='success' sx={{ fontSize:70}}/>
            <span>Seccessful</span>
            <p className='p-5 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore laudantium earum excepturi quibusdam sint soluta, itaque explicabo consequuntur deleniti omnis autem est alias</p>
         </div>
        </div>
    </div>
  )
}

export default Validation