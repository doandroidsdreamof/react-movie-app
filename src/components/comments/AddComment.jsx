import * as React from 'react'
import Button from '@mui/material/Button';


const AddComment = () => {
  return (
    <div className="mt-8 flex  justify-center w-fifty mx-auto items-center flex-col gap-y-2   text-left">
        <textarea
          className="textarea textarea-info w-full  mx-auto"
          placeholder="Comment..."
        ></textarea>
        <div className='flex-start  mr-auto' >
        <Button variant="contained">Comment</Button>
        </div>

    </div>
  )
}

export default AddComment
