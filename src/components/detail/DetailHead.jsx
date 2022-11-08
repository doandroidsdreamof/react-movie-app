import React from 'react'

function DetailHead(props) {
  return (
    <h3 className="text-gray-50 order-2 relative bottom-3 ml-8 mt-auto -translate-y-8 text-2xl md:text-4xl z-50 font-roboto font-medium">
      {props?.title}
    </h3>
  )
}

export default DetailHead
