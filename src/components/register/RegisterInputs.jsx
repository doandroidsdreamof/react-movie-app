import React from 'react'

function RegisterInputs() {
  return (
    <>
      <div className="flex flex-row gap-x-2">
        <label htmlFor="firsName" className="hidden" />
        <input
          type="text"
          name="firstName"
          id="firsName"
          placeholder="First Name"
          required
          className="block w-fifty px-4 py-2 rounded-md border bg-gray-200 border-gray-300 text-gray-600 transition duration-300
      focus:ring-2 focus:ring-sky-300 focus:outline-none "
        />
        <label htmlFor="lastName" className="hidden" />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
          className="block w-fifty px-4 py-2 rounded-md border bg-gray-200 border-gray-300 text-gray-600 transition duration-300
      focus:ring-2 focus:ring-sky-300 focus:outline-none"
        />
      </div>

      <label htmlFor="email" className="text-gray-700" />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        required
        className="block w-full px-4 py-3 rounded-md border bg-gray-200 border-gray-300 text-gray-600 transition duration-300
      focus:ring-2 focus:ring-sky-300 focus:outline-none
       "
      />

      <label htmlFor="pwd" className="text-gray-700 mb-2" />
      <input
        type="password"
        name="pwd"
        id="pwd"
        placeholder="password"
        minLength="8"
        className="block w-full px-4  bg-gray-200 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                          focus:ring-2 focus:ring-sky-300 focus:outline-none
                                         "
      />
    </>
  )
}

export default RegisterInputs
