import { getAuth } from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where
} from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';

function CommentForm(props) {
  const [comments, setComments] = useState('');
  const { id } = useParams();
  const user = useContext(AuthContext);
  const auth = getAuth();

  async function setCommentValue(e) {
    e.preventDefault();
    if (comments.length > 0) {
      try {
        const postID = await uuidv4();
        const colRef = collection(db, id);
        const docRef = await setDoc(doc(db, id, postID), {
          userName: auth?.currentUser?.displayName,
          createdAt: Timestamp.fromDate(new Date()),
          date: new Date().toDateString(),
          userID: auth?.currentUser?.uid,
          text: comments,
          postID: postID,
          photoURL: auth?.currentUser?.photoURL,
          email: user?.currentUser.email,
          removed: null,
        });

        setComments('');
        props.renderForm();
        insertAvatarToDocs();
      } catch (error) {
        console.error(error);
      }
    }
  }

  //* To update user avatar to all documents //
  async function insertAvatarToDocs() {
    const q = query(collection(db, id), where('email', '==', user?.currentUser?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      updateDoc(doc.ref, {
        //* if comment is removed not update user avatar *//
        photoURL: photoURL !== 'removed' ? auth?.currentUser?.photoURL : 'removed',
      });
    });
  }

  return (
    <form className="mb-6 w-full mt-2 -translate-x-4 md:translate-x-0 ">
      <div className="py-2 px-3 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          disabled={user?.currentUser === null ? true : false}
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          id="comment"
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none "
          placeholder="Write a comment..."
          required
        />
      </div>
      <button
        disabled={user?.currentUser === null ? true : false}
        onClick={(e) => setCommentValue(e)}
        type="submit"
        className="inline-flex items-center bg-star py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
      >
        Post comment
      </button>
    </form>
  );
}

export default CommentForm;
