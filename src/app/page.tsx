"use client"

import React, { useState } from "react"
import { createPortal } from "react-dom"
import { MouseEventHandler } from "react"








export const MyContext = React.createContext("")

export default function Home() {
  const [isModalOpen, setModal] = useState(false)
  const handleClick:MouseEventHandler<HTMLElement> = ()=>{
    setModal((isModalOpen)=>!isModalOpen)
  }
  return (
    <>
    <MyContext.Provider value="default">
      <div>
        {isModalOpen && createPortal(<div className="modal">modal</div>,document.body)}
        <button  onClick={handleClick}>Modal</button>
      </div>
    </MyContext.Provider>
      
      
    </>
  );
}
