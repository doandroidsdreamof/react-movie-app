import React, { useEffect, useState } from 'react';

import LoginWithGoogleButton from './LoginWithGoogleButton';
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import InvalidLogin from '../common/InvalidLogin';
import { useNavigate } from 'react-router-dom';

function LoginInputs() {
  const auth = getAuth();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setError(false)
    setOk(false)
  }, [ok]);

  const logInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setOk(true);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <>
      <InvalidLogin ok={ok} error={error} />
      <label htmlFor="email" className="text-gray-700" />
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
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
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        minLength="8"
        required
        className="block w-full px-4  bg-gray-200 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                focus:ring-2 focus:ring-sky-300 focus:outline-none
                                invalid:ring-2 "
      />
      <LoginWithGoogleButton />
      <button
        onClick={(e) => logInWithEmailAndPassword(e)}
        type="submit"
        className="w-full py-3 px-6 rounded-md bg-sky-600
    focus:bg-sky-700 active:bg-sky-500"
      >
        <span className="text-white">Continue</span>
      </button>
    </>
  );
}

export default LoginInputs;
