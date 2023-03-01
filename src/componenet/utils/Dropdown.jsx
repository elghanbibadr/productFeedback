import React from 'react'
import { useState } from 'react'
const Dropdown = (props) => {
    const [selectedOption,setSelectedOption] = useState(props.defaultOption)
    const [dropDownExpanded,setDropDownExpanded] = useState(false)
    const [selectedOptionId,setSelectedOptionId] = useState(0)
    const handleDropDownSelected=()=>{
        setDropDownExpanded(prv => !prv)
    }
    const handleOptionSelected=(e)=>{
        setSelectedOptionId(e.target.id)
        setSelectedOption(e.target.textContent)
        props.onSaveSelection(e.target.textContent)
    }
  return (
            <div className={`custom-select cursor-pointer w-3/4 ${dropDownExpanded ? "z-30" :"z-0"} relative text-white dark:text-textLight ${props.className}`}>
                <div onClick={handleDropDownSelected}  className={`flex ${props.name=="FeedbackDropDown" ? "justify-between" :""}  items-center`}>
                    <h5 className={ ` ${props.name=="FeedbackDropDown" ? "text-greyDark" :"text-white"} mr-4 `}>{selectedOption} </h5>
                    <svg className={ `transition-transform	 ${dropDownExpanded ? "rotate-180" : "rotate-0"}` } width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                {dropDownExpanded && <ul className={`absolute text-greyDark rounded-sm  shadow-lg  mt-2  bg-white  ${props.name=="FeedbackDropDown" ? "w-full" :"w-[220px]"} `}>
                    {props.options.map((option,index)=>{
                        return <li onClick={handleOptionSelected} id={index} key={index}  className={` relative border-b p-3 pr-30  hover:text-purple ${selectedOptionId==index ? "checkIcon" :""} `}>{option}</li>

                    })}
                   
                </ul>}
            </div>
  )
}

export default Dropdown