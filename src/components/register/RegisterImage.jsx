import React from 'react'

import signImage from '../../assets/image/register2.jpg'

function RegisterImage() {
  return (
    <div className="rounded-lg lg:block " hidden>
      <img
        src={signImage}
        className="rounded-l-xl object-cover h-onehundred"
        height=""
        width=""
        alt="sign-image"
      />
    </div>
  )
}

export default RegisterImage
