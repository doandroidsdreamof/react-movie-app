import React from 'react'

import LoginSubmitButton from "./LoginSubmitButton"
import LoginWithGoogleButton from './LoginWithGoogleButton'

function LoginInputs() {
  return (
    <>
      <label htmlFor="email" className="text-gray-700" />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        className="block w-full px-4 py-3 rounded-md border bg-gray-200 border-gray-300 text-gray-600 transition duration-300
focus:ring-2 focus:ring-sky-300 focus:outline-none
invalid:ring-2 "
      />

      <label htmlFor="password" className="text-gray-700" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        minLength="8"
        required
        className="block w-full px-4  bg-gray-200 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                focus:ring-2 focus:ring-sky-300 focus:outline-none
                                invalid:ring-2 "
      />
      <LoginWithGoogleButton />
      <LoginSubmitButton />
    </>
  )
}

export default LoginInputs
