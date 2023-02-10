import React from 'react'
import Card from '../utils/Card'
import commentLogo from "../../images/shared/icon-comments.svg"
import SuggestionTypeIcon from './SuggestionTypeIcon'
import UpVoteIcon from '../utils/UpVoteIcon'

const SuggestionCard = (props) => {
  return (
    <Card className='p-6 mb-6 grid grid-cols-2 grid-row-[1fr_100px] gap-y-10 md:grid md:grid-cols-[80px_1fr_1fr_1fr_1fr_50px] md:grid-rows-1'>
        <div className='col-span-2 md:col-span-4  md:col-start-2 '>
          <h3>{props.title}</h3>
          <div>
              <p className='my-4'>{props.description}</p>
              <SuggestionTypeIcon   text='Feature'/>
          </div>
        </div>
              <UpVoteIcon className='md:col-start-1 md:row-start-1  '  text={props.upvotes}/>
              <div className='flex items-center justify-self-end self-center '>
                <img  src={commentLogo} alt='comment logo' />
                <h3 className='mx-2'>{props.commentsLength}</h3>
              </div>
    </Card>
  )
}

export default SuggestionCard