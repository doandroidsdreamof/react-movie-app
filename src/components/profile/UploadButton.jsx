import React, { useRef } from 'react'

const UploadButton = () => {
  const ref = useRef()
  const handleClick = (e) => {
    ref.current.click()
  }
  return (
    <>
      <button onClick={handleClick} className="btn btn-primary font-roboto ">
        Upload Your Profile Photo
        <input className="hidden" ref={ref} type="file" />
      </button>
    </>
  )
}

export default UploadButton
