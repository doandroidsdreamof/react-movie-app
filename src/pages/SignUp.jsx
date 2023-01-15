import React from 'react';

//* Local imports //
import LoginLink from '../components/register/LoginLink';
import RegisterImage from '../components/register/RegisterImage';
import RegisterInputs from '../components/register/RegisterInputs';

function SignUp() {
  return (
    <div className="relative m-auto px-6   text-gray-500 md:px-12 xl:px-40">
      <div className="rounded-xl  bg-opacity-75 bg-input-card backdrop-blur-2xl   shadow-xl">
        <div className="lg:grid lg:grid-cols-2 ">
          <RegisterImage />
          <div className="p-6 sm:p-16">
            <h2 className="mb-8 text-2xl text-cyan-600 font-bold">Create Account</h2>
            <div className="space-y-6">
              <RegisterInputs />
              <LoginLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
