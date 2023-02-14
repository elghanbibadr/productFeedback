import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../store/AppContext'
import Card from '../utils/Card'
import SingleComment from './SingleComment'
import SuggestionCard from '../suggestions/SuggestionCard'
export const Comments = () => {
  const {currentSuggestionId,productRequests}=useContext(AppContext)
  //  const [comment,setComment]=useState(undefined)
    const currentSuggestion=productRequests.find(item => item.id==currentSuggestionId)
    const {id,title,description,upvotes}=currentSuggestion
    console.log(currentSuggestion.comments)
    // setComment(currentSuggestion.comments)
    const comments = currentSuggestion.comments;

 console.log(currentSuggestion)
 console.log(comments.length)

  return (
    <>
    <SuggestionCard  id={id} title={title} description={description} upvotes={upvotes} commentsLength={comments.length} />
    <Card>
      <h3 className='text-base md:text-xl mb-6'>{comments && comments.length}  comment </h3>
       {comments &&  comments.map(({id,content,user})=>{
        return <SingleComment key={id} id={id} content={content} user={user} />
       })}
    </Card>
    </>
  )
}
