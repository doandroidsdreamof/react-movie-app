import React from 'react'
import signImage from '../assets/image/sign-image2.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useEffect, useState, useContext } from 'react'
import * as Yup from 'yup'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import RegisterLink from '../components/Login/RegisterLink'

const SignIn = () => {
    return (
        <div className="relative container   m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto space-y-8 md:w-8/12 lg:w-full ">
                <div className="rounded-xl  bg-opacity-75 bg-input-card backdrop-blur-2xl  shadow-xl">
                    <div className="lg:grid lg:grid-cols-2">
                        <div className="rounded-lg lg:block" hidden>
                            <img
                                src={signImage}
                                className="rounded-l-xl object-cover   h-onehundred"
                                height=""
                                width=""
                                alt="sign-image"
                            />
                        </div>
                        <div className="p-6 sm:p-16">
                            <h2 className="mb-8 text-2xl text-cyan-600 font-bold">
                                Sign in to your account
                            </h2>
                            <form action="" className="space-y-8">
                                <div className="space-y-2">
                                    <label for="email" className="text-gray-700"></label>
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
                                        <label for="password" className="text-gray-700"></label>
                                        <button className="p-2 -mr-2" type="reset">
                                            <span className="text-sm text-sky-500">
                                                Forgot your password ?
                                            </span>
                                        </button>
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
                                    <div className=" flex w-full mt-4 flex-row h-14   text-center justify-center">
                                        <button
                                            type="button"
                                            className="text-white justify-center  text-xs w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-md  py-1 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55  mb-2"
                                        >
                                            <svg
                                                className="mr-2 -ml-1 w-4 h-4"
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fab"
                                                data-icon="google"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 488 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                                ></path>
                                            </svg>
                                            Sign in with Google
                                        </button>
                                    </div>
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
