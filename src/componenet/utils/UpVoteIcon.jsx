import React, { useState } from 'react'
const UpVoteIcon = (props) => {
    const [isActive,setActive]=useState(false)
    const handleClick=()=>{
        setActive(prv => !prv)
    }
  return (
    <div onClick={handleClick} className={`${props.className} flex items-center md:flex-col text-[.8rem]  cursor-pointer  hover:bg-greyHover font-semibold bg-grey py-2 px-3 w-fit h-fit rounded-lg md:text-[1rem] ${isActive ?  "bg-blue text-white hover:bg-blue" :"text-blue"} md:h-[60px] md:w-[40px]`}>
    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke={isActive ? "#fff" : "#4661E6"} stroke-width="2" fill="none" fill-rule="evenodd"/></svg>   
     <span className='mx-2 md:mx-0 mt-2' >{props.text}</span>
    </div>
  )
}

export default UpVoteIcon