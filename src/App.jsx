
import { useState } from 'react'
import './App.css'
import { Colors } from './Component.jsx/Colors'

function App() {
   const [singleColor,setSingleColor]=useState([]);

const Refarece =()=>{
  let  total=[]
   
    for(let i=0; i<30; i++){
    let generat= `#${Math.random().toString(16).slice(2,8)}`
    total[i]=generat
     
    }
    setSingleColor(total)
  }

   window.onload=()=>Refarece();
 
  
  return (
  <div className=' '>
  <div className="app-div">
  <button className=" px-3 py-2 bg-white border m-2 rounded" onClick={Refarece}>Refarece</button>
  </div>
    
    <div className="main-div ">
      {singleColor.map((color)=> <div key={color} ><Colors  Color={color}></Colors></div>)}
    </div>

  </div>
  )
}

export default App
