import React from 'react'
import fallBackImage from '../../assets/image/fallback-image.png'

 const Avatar = () => {
  return (
    <div className="avatar">
    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src={fallBackImage}/>
    </div>
  </div>
  )
}


export default Avatar