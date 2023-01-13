import React from 'react'
import CommentText from './CommentText'
import CommentEdit from './CommentEdit'
import CommentHeader from './CommentHeader'
import CommentReplyButton from './CommentReplyButton'

const Comment = () => {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg ">
      <div className="flex justify-between items-center mb-2">
        <CommentHeader />
        <CommentEdit />
      </div>
      <CommentText />
      <CommentReplyButton />
    </article>
  )
}

export default Comment
