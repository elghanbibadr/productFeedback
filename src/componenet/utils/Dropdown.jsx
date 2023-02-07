import React from 'react'
import { useState } from 'react'
const Dropdown = (props) => {
    const [dropDownExpanded,setDropDownExpanded] = useState(true)
    const handleDropDownSelected=()=>setDropDownExpanded(prv => !prv)
  return (
            <div className="custom-select cursor-pointer relative text-white dark:text-textLight ">
                <div onClick={handleDropDownSelected}  className="flex items-center">
                    <h5 className="mr-4">Most upvote </h5>
                    <svg className={ `transition-transform	 ${dropDownExpanded ? "rotate-180" : "rotate-0"}` } width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                {dropDownExpanded && <ul className='absolute text-greyDark rounded-sm  shadow-lg  mt-2  bg-white '>
                    {props.options.map((option)=>{
                        return <li className=' capitalize border-b p-3 pr-24 hover:text-purple' >{option}</li>

                    })}
                   
                </ul>}
            </div>
  )
}

export default Dropdown