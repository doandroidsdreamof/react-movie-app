import React from 'react'

import LoginHead from '../components/login/LoginHead'
import LoginImage from '../components/login/LoginImage'
import LoginInputs from '../components/login/LoginInputs'
import PasswordReset from '../components/login/PasswordReset'
import RegisterLink from '../components/login/RegisterLink'

function SignIn() {
  return (
    <div className="relative container   m-auto px-4 text-gray-500 md:px-12 xl:px-40">
      <div className="rounded-xl  bg-opacity-75 bg-input-card backdrop-blur-2xl  shadow-xl">
        <div className="lg:grid lg:grid-cols-2">
          <LoginImage />
          <div className="p-6 sm:p-16">
            <LoginHead />
            <form action="" className="space-y-3">
              <LoginInputs />
              <PasswordReset />
              <RegisterLink />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
