import React from 'react'
import Dropdown from '../../utils/Dropdown'
const SuggestionBar = () => {
  return (
    <div className='bg-greyDarkest p-4'>
        <h4>0 Suggestions</h4>
          <Dropdown options={["Most Upvotes","least upvotes","most comments","least comments"]}/>
    </div>
  )
}

export default SuggestionBar