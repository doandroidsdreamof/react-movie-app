import React from 'react';
import { getAuth, GoogleAuthProvider, linkWithPopup, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { doc, setDoc, getDocs, collection } from 'firebase/firestore';
import { AuthContext, useAuth } from '../../context/AuthContext';

function RegisterGoogleButton() {
  const auth = getAuth();
  const navigate = useNavigate();
  // const user = useAuth()

  const registerWithGoogle = async () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(async (result) => {
      const user = result.user;
      const ref = await doc(db, 'users-data', user.currentUser?.uid);
      console.log('🚀 ~ file: RegisterGoogleButton.jsx ~ line 16 ~ signInWithPopup ~ user', user);
      setDoc(ref, {
        firstName: user.currentUser?.displayName,
        lastName: '',
        bookmarks: [],
        photoURL: user?.currentUser?.PhotoURL,
      });
    });
    navigate('/').catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className=" flex w-full mb-4 mt-4 flex-row h-11 text-center justify-center">
      <button
        onClick={registerWithGoogle}
        type="button"
        className="text-white w-full justify-center bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 "
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
          />
        </svg>
        Register with Google
      </button>
    </div>
  );
}

export default RegisterGoogleButton;
