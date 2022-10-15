import React from 'react'

 const ActorBirthDetail = ({birthday,placeOfBirth}) => {



  return (
  <div className="flex flex-col ">
    <div className="text-lg text-gray-200 font-roboto">Birthday</div>
    <div className="text-sm text-gray-400 font-roboto">{birthday}</div>
    <div className="text-lg text-gray-200 font-roboto">Place Of Birth</div>
    <div className="text-sm text-gray-400 font-roboto">{placeOfBirth}</div>
  </div>
  

  )
}

export default ActorBirthDetail;