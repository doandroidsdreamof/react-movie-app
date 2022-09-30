import React from 'react'

const FormLayout = ({children}) => {
  return (
    <div className='bg-input-bg h-screen w-scree border-2 n overflow-hidden flex justify-center'>
        {children}
        
        </div>
  )
}

export default FormLayout