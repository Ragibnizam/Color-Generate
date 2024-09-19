import React from 'react'
import './color.css'

export const Colors = ({Color}) => {
  return (
    <>
    
   
   
    <div style={{backgroundColor:Color}} className='border p-7 m-4 bg-white rounded-md   '>
        <div className=" block m-0 p-4 h-24 w-24">
         
        </div>
        <p className='rounded border block bg-white mx-auto text-center'>{Color}</p>
        
   </div>
   </>
  )
}
