import React from 'react'

import LoginHead from '../components/Login/LoginHead'
import LoginImage from '../components/Login/LoginImage'
import LoginWithGoogleButton from '../components/Login/LoginWithGoogleButton'
import RegisterLink from '../components/Login/RegisterLink'
import PasswordReset from '../components/Login/PasswordReset'


function SignIn() {
    return (
        <div className="relative container   m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto space-y-8 md:w-8/12 lg:w-full ">
                <div className="rounded-xl  bg-opacity-75 bg-input-card backdrop-blur-2xl  shadow-xl">
                    <div className="lg:grid lg:grid-cols-2">
                        <LoginImage />
                        <div className="p-6 sm:p-16">
                            <LoginHead />
                            <form action="" className="space-y-8">
                                <div className="space-y-2">
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
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-gray-700" />
                                        <PasswordReset />
                                    </div>
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
                                        className="w-full mt-1 py-3 px-6 rounded-md bg-sky-600
                                        focus:bg-sky-700 active:bg-sky-500"
                                    >
                                        <span className="text-white">Continue</span>
                                    </button>
                                </div>
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
