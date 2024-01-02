import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div className='flex w-[285px]  h-[105px] gap-[24px] flex-col mt-[25px] ml-[54px] mr-[54px]'>
            <div  className='text-[36px] mx-auto inter-font font-[700]'>
                <p>Foody Zone</p>
            </div>
            <div className='border-[1px] pt-[11px] pl-[15px] pr-[157px] pb-[10px] rounded-[5px]' style={{borderColor:'#FF0909'}}>
                <input  type="text" className='font-[16px] font-[400] leading-normal' placeholder='Search Food....' />
            </div>
            

        </div>
    </div>
  )
}
