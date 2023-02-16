import { useState ,useContext} from "react";
import { AppContext } from "../store/AppContext";
 const SuggestionTypeIcon = ({id,dataType,className,text,isHover}) => {
    const [isActive,setIsActive] =useState(false)
    const [SelectedBoxId,setSelectedBoxId]=useState(null)
    const {filterSuggestionCategory,setFilterSuggestionCategory}=useContext(AppContext)
    const handleClick=() => {
        if (!props.isHover) return;
        // that mean that the current icon belongs to the comment card
          setIsActive(prv =>!prv)
    }
    const handleFilterListIconClicked=(e)=>{
      setFilterSuggestionCategory(e.target.getAttribute('dataType'))
    }

  return ( 
    <>
    { !dataType &&  <span id={id}  onClick={handleClick} className={`${className} text-[.8rem]  cursor-pointer ${isActive ? "text-white bg-blue" :"text-blue bg-grey"}  ${(isHover && !isActive) ? "hover:bg-greyHover" :""} font-semibold  py-2 px-3 w-fit h-fit rounded-lg md:text-[0.9rem] }`}>{text}</span>}
    { dataType && <span id={id} datatype={dataType} onClick={handleFilterListIconClicked} className={`${className} text-[.8rem]  cursor-pointer ${ filterSuggestionCategory===dataType ? "text-white bg-blue" :"text-blue bg-grey"}  ${ isHover && (filterSuggestionCategory!==dataType)  ? "hover:bg-greyHover" :""} font-semibold  py-2 px-3 w-fit h-fit rounded-lg md:text-[0.9rem] }`}>{text}</span>}
    
    </>
  )
}


export default SuggestionTypeIcon