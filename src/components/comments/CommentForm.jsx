import React from 'react'

const CommentForm = () => {


const handleSubmit = (e) =>{
  e.preventDefault()
}



  return (
    <form className="mb-6 w-full mt-2">
      <div className="py-2 px-3 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
        <label for="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button
        onClick={(e) => handleSubmit(e)}
        type="submit"
        className="inline-flex items-center bg-star py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
      >
        Post comment
      </button>
    </form>
  )
}

export default CommentForm
