import React, { useContext, useEffect, useState } from 'react';
//* Firebase //
import { collection, getDocs } from 'firebase/firestore';
//* Third-party //
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { AuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';

//* Local imports //
import CommentEdit from './CommentEdit';
import CommentEditForm from './CommentEditForm';
import CommentHeader from './CommentHeader';
import CommentReplyButton from './CommentReplyButton';
import CommentText from './CommentText';
import ReplyComment from './ReplyComment';
import ReplyCommentForm from './ReplyCommentForm';

function Comment({ items }) {
  const [reply, setReply] = useState([]);
  const [replyToggle, setReplyToggle] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const contextEdit = useContext(AuthContext);
  const { id } = useParams();

  /**

 //* ContextEdit.edit render state to crud operations
 //* When a new post is added or changed context API trigger renders and getReply function  gets new data from firestore

  */

  useEffect(() => {
    getReply();
  }, [replyToggle, contextEdit.edit, editToggle]);

  async function getReply() {
    try {
      const subColRef = collection(db, id, items?.postID, 'sub-comments');
      const querySnapshot = await getDocs(subColRef);
      const getData = [];
      querySnapshot.forEach((doc) => {
        getData.push(doc.data());
      });
      //* sort by last comments //
      const sortedGetData = await getData.sort((a, b) => b.createdAt - a.createdAt);
      setReply([...sortedGetData]);
    } catch (err) {
      console.error(err);
    }
  }

  function handleReplyToggle() {
    setReplyToggle(!replyToggle);
  }
  function handleCommentEditForm() {
    setEditToggle(!editToggle);
  }

  return (
    <>
      <article
        className={
          !replyToggle && !editToggle
            ? 'p-3 mb-2 -translate-x-4 md:translate-x-0 shadow-sm  ml-auto w-eighty  md:w-ninty text-base bg-white rounded-lg '
            : 'hidden'
        }
      >
        <div className="flex justify-between items-center mb-2">
          <CommentHeader
            date={items?.date}
            userName={items?.userName}
            avatarURL={items?.photoURL}
            key={uuidv4()}
          />
          <CommentEdit
            commentEditFunction={() => handleCommentEditForm()}
            mainPostID={items?.postID}
            reply={false}
            key={uuidv4()}
            userID={items?.userID}
            removed={items?.removed}
          />
        </div>
        <CommentText key={uuidv4()} commentValue={items?.text} />
        <CommentReplyButton key={uuidv4()} nested={false} replyToggle={() => handleReplyToggle()} />
      </article>
      <CommentEditForm
        text={items?.text}
        reply={false}
        postID={items?.postID}
        key={uuidv4()}
        cancelEditFunction={() => setEditToggle(false)}
        toggle={editToggle}
      />
      <ReplyCommentForm
        parentID={items?.postID}
        cancelComment={() => setReplyToggle(false)}
        replyToggle={replyToggle}
        key={uuidv4()}
      />
      {reply.map((data) => (
        <ReplyComment userID={items?.userID} replyComments={data} key={data.postID} />
      ))}
    </>
  );
}

export default Comment;
