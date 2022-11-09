import React from 'react'

import LoginWithGoogleButton from './LoginWithGoogleButton'

function LoginInputs() {

  /*
        injectStyle()
      const notify = () => toast.dark('Please fill out required fields')
      notify()
      <ToastContainer />
      */
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
      <button
        type="submit"
        className="w-full py-3 px-6 rounded-md bg-sky-600
    focus:bg-sky-700 active:bg-sky-500"
      >
        <span className="text-white">Continue</span>
      </button>
    </>
  )
}

export default LoginInputs
