import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../store/AppContext'
import Card from '../utils/Card'
import SingleComment from './SingleComment'
export const Comments = () => {
  const {currentSuggestionId,productRequests}=useContext(AppContext)
   const [comment,setComment]=useState(undefined)
    const currentSuggestion=productRequests.find(item => item.id==currentSuggestionId)
    console.log(currentSuggestion.comments)
    setComment(currentSuggestion.comments)


  console.log(comment)

  return (
    <Card>
    <h1>comment section</h1>
     {comment &&  comment.map(({id,content,user})=>{
      return <SingleComment key={id} id={id} content={content} user={user} />
     })}
    </Card>
  )
}
