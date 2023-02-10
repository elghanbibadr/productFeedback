import React from 'react'
import Dropdown from '../../utils/Dropdown'
import Btn from '../../utils/Btn'
import suggestionIcon from "../../../images/suggestions/icon-suggestions.svg"
const SuggestionBar = () => {
  return (
    <div className='bg-greyDarkest relative md:rounded-xl whitespace-nowrap w-full pr-4 py-2 flex-row-between flex-nowrap '>
        <div className='flex items-center justify-around md:w-4/5'>
          <div className='hidden md:flex items-center'>
            <img className='absolute left-4' src={suggestionIcon} alt='suggestion icon'/>
            <h4 className='md:text-lg' >0 Suggestions</h4>
          </div>
             <div className='flex items-center '>
               <span className='text-white text-xs'>sort by :</span>
                <Dropdown defaultOption='Most Upvotes' options={["Most Upvotes","least upvotes","most comments","least comments"]}/>
             </div>
        </div>
            <Btn className='bg-purple whitespace-nowrap w-fit   hover:bg-purpleHover' text='+Add feedback' />
    </div>
  )
}

export default SuggestionBar