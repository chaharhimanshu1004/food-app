import React from 'react'
import foodData from '../data/Data'

function Card({index}) {
  return (
    <div>
        <div style={{backdropFilter:' blur(13.184196472167969px)'}} className=' w-[340px] h-[167px] border-[#98F9FF] border-[0.659px] rounded-[19.45px] '>
            <div className="img">
                <h1>
                    {foodData[index].name}
                </h1>



            </div>
            <div className="tt">

            </div>

            

        </div>
    </div>
  )
}

export default Card