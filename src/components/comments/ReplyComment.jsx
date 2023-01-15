import React, { useContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';

import CommentText from './CommentText';
import CommentEdit from './CommentEdit';
import CommentHeader from './CommentHeader';
import CommentReplyButton from './CommentReplyButton';
import CommentEditForm from './CommentEditForm';

const ReplyComment = ({ userID, replyComments }) => {
  const user = useContext(AuthContext);
  const auth = getAuth();
  const [editToggle, setEditToggle] = useState(false);

  function handleReplyCommentEditForm() {
    setEditToggle(!editToggle);
  }
  return (
    <>
      <article
        className={
          !editToggle
            ? 'p-3 mb-2 -translate-x-4 md:translate-x-0  ml-auto w-seventy  md:w-eighty text-base bg-white rounded-lg '
            : 'hidden'
        }
      >
        <div className="flex justify-between items-center mb-2">
          <CommentHeader
            key={uuidv4()}
            date={replyComments?.date}
            userName={replyComments?.userName}
            avatarURL={replyComments?.photoURL}
          />
          <CommentEdit
            reply={true}
            key={uuidv4()}
            userID={replyComments?.userID}
            postID={replyComments?.postID}
            commentEditFunction={(e) => handleReplyCommentEditForm()}
          />
        </div>
        <CommentText key={uuidv4()} commentValue={replyComments?.text} />
      </article>
      <CommentEditForm
        text={replyComments?.text}
        postID={replyComments?.postID}
        reply={true}
        key={uuidv4()}
        cancelEditFunction={(e) => setEditToggle(false)}
        toggle={editToggle}
      />
    </>
  );
};

export default ReplyComment;
