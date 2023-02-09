import { useState } from "react";
 const SuggestionTypeIcon = (props) => {
    const [isActive,setIsActive] =useState(false)
    const [SelectedBoxId,setSelectedBoxId]=useState(null)
    const handleClick=(e) => {
        if (!props.isHover) return;
        // that mean that the current icon belongs to the comment card
        setIsActive(prv =>!prv)
         setSelectedBoxId(e.target.id)
    }

  return (
    <span id={props.id} onClick={handleClick} className={`${props.className} text-[.8rem]  cursor-pointer ${isActive ? "text-white" :"text-blue"}  ${ props.isHover ? "hover:bg-greyHover" :""} font-semibold  py-2 px-3 w-fit h-fit rounded-lg md:text-[1rem] ${SelectedBoxId==props.id ? "bg-blue" : "bg-grey"}`}>{props.text}</span>
  )
}


export default SuggestionTypeIcon