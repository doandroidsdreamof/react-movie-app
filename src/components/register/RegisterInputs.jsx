import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'

import RegisterGoogleButton from './RegisterGoogleButton'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { createUserWithEmailAndPassword, GoogleAuthProvider,getAuth} from 'firebase/auth'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'


const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
})

function RegisterInputs() {
  const auth = getAuth()
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, values.email, values.password)
      setDoc(doc(db, 'users-data', user.uid), {
        firstName: values.firstName,
        lastName: values.lastName,
        avatarUrl: '',
        bookmarks: [],
        comments: [],
      })

      injectStyle()
      const notify =  () => toast.dark('register is successful')
      notify()
      navigate('/')

    } catch (error) {
      console.error(error)

    }
  }



  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
    >
      <Form className="space-y-3">
      <ToastContainer />
        <div className="flex flex-row gap-x-2">
          <Field
            name="firstName"
            required
            placeholder="First Name"
            className="block w-fifty px-4 py-2 rounded-md border bg-gray-200 border-gray-300 text-gray-600 transition duration-300
      focus:ring-2 focus:ring-sky-300 focus:outline-none "
          />

          <Field
            name="lastName"
            placeholder="Last Name"
            required
            className="block w-fifty px-4 py-2 rounded-md border bg-gray-200 border-gray-300 text-gray-600 transition duration-300
      focus:ring-2 focus:ring-sky-300 focus:outline-none"
          />
        </div>
        <label htmlFor="email" className="text-gray-700" />
        <Field
          name="email"
          placeholder="email"
          type="email"
          className="block w-full px-4 py-3 rounded-md border bg-gray-200 border-gray-300 text-gray-600 transition duration-300
      focus:ring-2 focus:ring-sky-300 focus:outline-none
       "
        />
        <label htmlFor="password" className="text-gray-700 mb-2" />
        <Field
          name="password"
          type="password"
          required
          placeholder="password"
          className="block w-full px-4  bg-gray-200 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                          focus:ring-2 focus:ring-sky-300 focus:outline-none
                                         "
        />
        <RegisterGoogleButton />
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-md bg-sky-600
                      focus:bg-sky-700 active:bg-sky-500"
        >
          <span className="text-white">Continue</span>
        </button>
      </Form>
    </Formik>
  )
}

export default RegisterInputs
