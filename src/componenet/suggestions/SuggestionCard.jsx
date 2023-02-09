import React from 'react'
import Card from '../utils/Card'
import commentLogo from "../../images/shared/icon-comments.svg"
import SuggestionTypeIcon from './SuggestionTypeIcon'
import UpVoteIcon from '../utils/UpVoteIcon'
const SuggestionCard = () => {
  return (
    <Card className='p-6 grid grid-cols-2 grid-row-[1fr_100px] gap-y-10 md:grid md:grid-cols-[80px_1fr_1fr_1fr_1fr_50px] md:grid-rows-1'>
        <div className='col-span-2 md:col-span-4  md:col-start-2 '>
          <h3>Add a dark theme option</h3>
          <div>
              <p className='my-4'>it would help people with light sensitives and who prefer dark mode</p>
              <SuggestionTypeIcon   text='Feature'/>
          </div>
        </div>
              <UpVoteIcon className='md:col-start-1 md:row-start-1  '  text='99'/>
              <img className='justify-self-end self-center ' src={commentLogo} alt='comment logo' />
    </Card>
  )
}

export default SuggestionCard