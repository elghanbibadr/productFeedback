import React, { useContext, useState } from 'react'
import Card from '../utils/Card'
import TextAreaInput from '../utils/TextAreaInput'
import Btn from '../utils/Btn'
import { AppContext } from '../store/AppContext'
import { data } from '../../../data'

const AddComment = () => {
   const {comments,setComments}=useContext(AppContext)
  const [commentContent,setCommentContent] =useState('')
    console.log(comments)

   const handleUserAddComment=(value)=>{
    setCommentContent(value)
   }

   const handleCommentPosted=()=>{
    if (comments) setComments(prv => [...prv,{id:16,"content":commentContent,user:data[0]["currentUser"],"replies":[]}])
    
   }


  return (
    <Card className='mt-6'>
        <h3>Add comment</h3>
        <TextAreaInput onSaveTextAreaValue={handleUserAddComment} className='my-4'/>
        <div className='flex-row-between'>
            <p>255 characters left</p>
             <Btn onClick={handleCommentPosted} className='bg-purple transition-colors duration-300 hover:bg-purpleHover' text='Post Comment ' />
        </div>
    </Card>
  )
}

export default AddComment