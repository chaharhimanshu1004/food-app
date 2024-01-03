import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-[#323334] w-[393px] h-[240px]'>
        <div  className='flex  flex-col max-w-[285px]  max-h-[129px] pt-[25px] ml-[54px] mr-[54px]'>
            <div  className='text-[36px] mx-auto inter-font font-[700]'>
                <span className='text-white'>F<span className='text-red-600'>oo</span>dy Z<span className='text-red-600'>o</span>ne</span>
            </div>
            <div className='border-[1px] mt-[12px] text-white pt-[11px] pl-[15px] pr-[157px] pb-[10px] rounded-[5px]' style={{borderColor:'#FF0909'}}>
                <input  type="text border-none" className='font-[16px]  bg-[#323334] font-[400] leading-normal' placeholder='Search Food....' />
            </div>
        </div>
        <div className='mt-[44px] items-center justify-center font-[16px] font-normal text-white w-[326px] h-[31px] flex gap-x-[16px] mx-auto'>
            <button style={{padding:"6px 12px", backgroundColor:'#FF4343'}} className='border-[1px] border-red-600 rounded-[5px] '>All</button>
            <button style={{padding:"6px 12px", backgroundColor:'#FF4343'}} className='border-[1px] border-red-600 rounded-[5px] '>Breakfast</button>
            <button style={{padding:"6px 12px", backgroundColor:'#FF4343'}} className='border-[1px] border-red-600 rounded-[5px] '>Lunch</button>
            <button style={{padding:"6px 12px", backgroundColor:'#FF4343'}} className='border-[1px] border-red-600 rounded-[5px] '>Dinner</button>
        </div>
    </div>
  )
}
