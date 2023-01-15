import React, { useContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import {
  getDocs,
  collection,
  doc,
  collectionGroup,
  onSnapshot,
  setDoc,
  getDoc,
  addDoc,
  FieldValue,
  Timestamp,
  where,
  query,
  updateDoc,
  arrayUnion,
  orderBy,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';

function CommentEditForm({ toggle, cancelEditFunction, reply, text, postID }) {
  const [comments, setComments] = useState(text);
  const { id } = useParams();
  const user = useContext(AuthContext);
  const auth = getAuth();
  const closeEditForm = () => cancelEditFunction();

  async function editComment(e) {
    e.preventDefault();
    if (comments.length > 0) {
      try {
        if (reply === true) {
          const allPosts = await getDocs(collectionGroup(db, 'sub-comments'));
          allPosts.forEach((doc) => {
            if (doc.data().postID == postID) {
              updateDoc(doc.ref, {
                text: comments,
              });
            }
          });
          user.editState();
        }

        if (reply === false) {
          //* update database //
          const q = query(collection(db, id), where('postID', '==', postID));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            updateDoc(doc.ref, {
              text: comments,
            });
          });
          user.editState();
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <form
      className={
        toggle
          ? 'mb-6  mt-2 w-eighty  md:w-ninty ml-auto -translate-x-4 md:translate-x-0 '
          : 'hidden'
      }
    >
      <div className="py-2 px-3 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 ">
        <label htmlFor="comment" className="sr-only">
          Edit Form
        </label>
        <textarea
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
        onClick={(e) => {
          editComment(e);
          closeEditForm();
        }}
        type="submit"
        className="inline-flex items-center bg-star py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
      >
        Post Edit
      </button>
      <button
        onClick={(e) => {
          closeEditForm();
        }}
        type="submit"
        className="inline-flex items-center ml-3 bg-star py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200  hover:bg-primary-800"
      >
        Cancel Edit
      </button>
    </form>
  );
}

export default CommentEditForm;
