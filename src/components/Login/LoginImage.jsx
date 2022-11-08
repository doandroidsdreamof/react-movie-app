import React from 'react'
import signImage from '../../assets/image/sign-image2.jpg'



 const LoginImage = () => {
  return (
    <div className="rounded-lg lg:block" hidden>
    <img
        src={signImage}
        className="rounded-l-xl object-cover   h-onehundred"
        height=""
        width=""
        alt="sign-image"
    />
</div>
  )
}



export default LoginImage