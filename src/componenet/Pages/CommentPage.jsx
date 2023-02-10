import React from 'react'
import { CommentsHeader } from '../comments/CommentsHeader'
import { Comments } from '../comments/Comments'
import AddComment from '../comments/AddComment'
const CommentPage = () => {
  return (
    <div className='p-6'>
    <CommentsHeader/>
    <Comments/>
    <AddComment/>
    </div>
  )
}

export default CommentPage