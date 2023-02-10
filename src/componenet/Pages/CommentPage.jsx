import React from 'react'
import { CommentsHeader } from '../comments/CommentsHeader'
import { Comments } from '../comments/Comments'
import AddComment from '../comments/AddComment'
const CommentPage = () => {
  return (
    <>
    <CommentsHeader/>
    <Comments/>
    <AddComment/>
    </>
  )
}

export default CommentPage