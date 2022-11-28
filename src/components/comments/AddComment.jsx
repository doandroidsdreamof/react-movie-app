import * as React from 'react'

const AddComment = () => {
  return (
    <div className="border-2 border-white flex justify-center">
      <h1 className="font-roboto text-2xl text-white">Comments</h1>
      <textarea className="textarea textarea-info w-seventy" placeholder="Comment..."></textarea>
    </div>
  )
}

export default AddComment
