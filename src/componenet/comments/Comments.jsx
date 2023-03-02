import React, { useContext, useEffect, useState} from 'react'
import { AppContext } from '../store/AppContext'
import Card from '../utils/Card'
import SingleChat from './SingleChat'
import SuggestionCard from '../suggestions/SuggestionCard'
export const Comments = () => {
  const {currentSuggestionId,productRequests,comments,setComments}=useContext(AppContext)
    const currentSuggestion=productRequests.find(item => item.id==currentSuggestionId)
     const {id,title,description,upvotes,category,comments:currentComments}=currentSuggestion

 console.log(currentComments)
 console.log(currentSuggestion)

    useEffect(()=>{
    setComments(currentComments)
    
    console.log(comments)
    },[])

  return (
    <>
    <SuggestionCard category={category}  id={id} title={title} description={description} upvotes={upvotes} commentsLength={ comments &&  comments.length } />
    <Card>
      <h3 className='text-base md:text-xl mb-6'>{comments && comments.length}  comment </h3>
       {comments &&  comments.map(({id,content,user,replies})=>{
        return <SingleChat replies={replies} key={id} id={id} content={content} user={user} />
       })}
    </Card>
    </>
  )
}
