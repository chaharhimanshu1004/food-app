import React from 'react' 
import Card from './Card'
import foodData from '../data/Data'
export default function Main() {
  return (
    <div style={{ width: '100vw',height:'100vh' }} className='img'>
        {
            foodData.map((food,index)=>{
                return <Card index={index}></Card>
            })
        }

        
       
    </div>
  )
}
