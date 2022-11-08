import React from 'react'

const FormLayout = ({children}) => {
  return (
    <div className='bg-input-bg min-h-screen w-screen   overflow-hidden flex justify-center'>
        {children}

        </div>
  )
}

export default FormLayout