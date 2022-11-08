import React from 'react'

import LoginHead from '../components/Login/LoginHead'
import LoginImage from '../components/Login/LoginImage'
import LoginSubmitButton from '../components/Login/LoginSubmitButton'
import LoginWithGoogleButton from '../components/Login/LoginWithGoogleButton'
import PasswordReset from '../components/Login/PasswordReset'
import RegisterLink from '../components/Login/RegisterLink'

function SignIn() {
  return (
    <div className="relative container   m-auto px-4 text-gray-500 md:px-12 xl:px-40">
      <div className="m-auto  md:w-8/12 lg:w-full ">
        <div className="rounded-xl  bg-opacity-75 bg-input-card backdrop-blur-2xl  shadow-xl">
          <div className="lg:grid lg:grid-cols-2">
            <LoginImage />
            <div className="p-6 sm:p-16">
              <LoginHead />
              <form action="" className="space-y-3">
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
                <PasswordReset />
                <RegisterLink />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
