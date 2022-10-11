import React from 'react'

 const GenresExplore = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
    <div className="relative">
      <input
        className="group peer hidden"
        type="radio"
        name="shippingOption"
        value="standard_alt"
        id="standard_alt"
      />
  
      <label
        className="block cursor-pointer text-center rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
        for="standard_alt"
      >
        <span className='text-gray-300 font-roboto'>Horror</span>
  
      </label>
  
      <svg
        className="absolute top-4 right-4 h-5 w-5 text-blue-600 opacity-0 peer-checked:opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  
  </div>
  )
}


export default GenresExplore