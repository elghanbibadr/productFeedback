import { useState ,useContext} from "react";
import { AppContext } from "../store/AppContext";
 const SuggestionTypeIcon = (props) => {
    const [isActive,setIsActive] =useState(false)
    const [SelectedBoxId,setSelectedBoxId]=useState(null)
    const {filterSuggestionCategory}=useContext(AppContext)
    const handleClick=(e) => {
        if (!props.isHover) return;
        // that mean that the current icon belongs to the comment card
        setIsActive(prv =>!prv)
        if(e.target.getAttribute('dataType')){
          console.log(e.target.getAttribute('dataType'))
                  
        }
        //  setSelectedBoxId(e.target.id)
    }

  return (
    <span id={props.id} datatype={props.dataType} onClick={handleClick} className={`${props.className} text-[.8rem]  cursor-pointer ${isActive ? "text-white bg-blue" :"text-blue bg-grey"}  ${ props.isHover && !isActive ? "hover:bg-greyHover" :""} font-semibold  py-2 px-3 w-fit h-fit rounded-lg md:text-[0.9rem] }`}>{props.text}</span>
  )
}


export default SuggestionTypeIcon