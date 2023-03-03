import React, { useContext, useState } from 'react'
import Card from '../utils/Card'
import TextAreaInput from '../utils/TextAreaInput'
import Btn from '../utils/Btn'
import { AppContext } from '../store/AppContext'
import { data } from '../../../data'

const AddComment = () => {
  const {comments,currentVisibleSuggestions,setCurrentVisibleSuggestions, productRequests,suggestions,setComments,setProductRequests,setSuggestion,currentSuggestionId}=useContext(AppContext)
  const [commentContent,setCommentContent] =useState('')
  const  currentSuggestion=productRequests.find(item => item.id==currentSuggestionId)

    // console.log(comments)

   const handleUserAddComment=(e)=>{
    setCommentContent(e.target.value)
   }

   const handleCommentPosted=()=>{
    setCommentContent('')
    if (commentContent) {
      // const filtered=suggestions.filter(item => item.id != currentSuggestionId);
      // console.log(filtered)
      const updatedArray = currentVisibleSuggestions.map((item) => {
        if (item.id == currentSuggestionId) {
          const newComment={
            content:commentContent,
            user:item.comments[0].user,
            replies:[]
          }
          console.log("newComment",newComment)
          return { ...item, comments: [...item.comments,newComment]};
        }
        return item;
      });
        setCurrentVisibleSuggestions(updatedArray);
        
      }
      setCommentContent('')
    // lets remove the curent suggestion and replace it with another one the holds the latest comment
    // setSuggestion(currentSuggestion)
    // setSuggestion(suggestions.filter(item => item.id !== currentSuggestionId))
    
    // console.log(suggestions.some(item => item.id !== currentSuggestionId))
    // console.log('hello')
    // setCurrentVisibleSuggestions(suggestions.filter(item => item.id !== currentSuggestionId))
    // setComments(prv => [...prv,{id:16,"content":commentContent,user:data[0]["currentUser"],"replies":[]}])
    // setProductRequests([])p
    
   }


  return (
    <Card className='mt-6'>
        <h3>Add comment</h3>
        <textarea placeholder='enter something' onChange={handleUserAddComment} className={ `input resize-none`} value={commentContent} />

        <div className='flex-row-between'>
            <p>255 characters left</p>
             <Btn textAreaValue={commentContent} onClick={handleCommentPosted} className='bg-purple transition-colors duration-300 hover:bg-purpleHover' text='Post Comment ' />
        </div>
    </Card>
  )
}

export default AddComment