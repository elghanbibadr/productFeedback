import { useState } from "react";
 const SuggestionTypeIcon = (props) => {
    const [isActive,setIsActive] =useState(false)

    const handleClick=() => {
        if (!props.isHover) return;
        // that mean that the current icon belongs to the comment card
        setIsActive(!isActive)
    }

  return (
    <span onClick={handleClick} className={`${props.className} text-blue text-[.8rem]  cursor-pointer   ${props.isHover ? "hover:bg-greyHover" :""} font-semibold bg-grey py-2 px-3 w-fit h-fit rounded-lg md:text-[1rem] ${isActive ? "bg-blue text-white hover:bg-blue" :""}`}>{props.text}</span>
  )
}


export default SuggestionTypeIcon