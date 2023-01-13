import React from 'react'
import  CommentForm  from '../comments/CommentForm';
import Comment from '../comments/Comment';


 const CommentsLayout = () => {
  return (
    <div className=' px-6 md:px-12 flex  flex-col justify-center'>

    <CommentForm />
    <Comment />

    </div>
  )
}


export default CommentsLayout;