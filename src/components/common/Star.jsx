import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Star = ({ rating }) => {
  return (
    <>
      <div className="toast toast-end rounded-sm  h-8  justify-center hidden  md:top-5 absolute z-50 md:flex flex-wrap ml-auto">
        <div className="alert alert-info px-6  h-full flex flex-row text-center items-center">
          <div>
            <span className="font-roboto text-white font-medium ">{rating.toFixed(1)}</span>
            <AiFillStar color={'#fff'} className="  relative inline-block " size={18} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Star
