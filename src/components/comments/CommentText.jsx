import React from 'react'

const CommentText = ({commentValue}) => {


  return (
    <>
      <p className="text-gray-500 text-xs md:text-sm ">
        {commentValue}
      </p>
    </>
  )
}

export default CommentText
