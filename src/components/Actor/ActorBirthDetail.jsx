import React from 'react'

 const ActorBirthDetail = ({birthday,placeOfBirth}) => {



  return (
  <div className="flex flex-col  px-3 md:px-0">
    <div className="lg:text-lg text-sm text-gray-200 font-roboto">Birthday</div>
    <div className="lg:text-sm text-xs text-gray-400 font-roboto">{birthday}</div>
    <div className="lg:text-lg text-sm text-gray-200 font-roboto">Place Of Birth</div>
    <div className="lg:text-sm text-xs text-gray-400 font-roboto">{placeOfBirth}</div>
  </div>
  

  )
}

export default ActorBirthDetail;