import React, { useState, useEffect,useContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../../context/AuthContext';

import CommentEdit from './CommentEdit';
import CommentHeader from './CommentHeader';
import CommentReplyButton from './CommentReplyButton';
import CommentText from './CommentText';
import ReplyComment from './ReplyComment';
import ReplyCommentForm from './ReplyCommentForm';

function Comment({ items,renderForm }) {
  const [reply, setReply] = useState([]);
  const [replyToggle, setReplyToggle] = useState(false);
  const { id } = useParams();
  const contextEdit = useContext(AuthContext);

  useEffect(() => {
    getReply();
  }, [replyToggle,contextEdit.edit]);

  async function getReply() {
    try {
      const subColRef = collection(db, id, items.postID, 'sub-comments');
      const querySnapshot = await getDocs(subColRef);
      const getData = [];
      querySnapshot.forEach((doc) => {
        getData.push(doc.data());
      });

      const sortedGetData = await getData.sort((a, b) => b.createdAt - a.createdAt);
      setReply([...sortedGetData]);
    } catch (err) {
      console.error(err);
    }
  }
  function handleReplyToggle() {
    setReplyToggle(!replyToggle);

  }

  return (
    <>
      <article
        className={
          !replyToggle
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
          <CommentEdit  reply={false} key={uuidv4()} userID={items?.userID} />
        </div>
        <CommentText key={uuidv4()} commentValue={items?.text} />
        <CommentReplyButton
          key={uuidv4()}
          nested={false}
          replyToggle={(e) => handleReplyToggle(false)}
        />
      </article>
      <ReplyCommentForm
        parentID={items?.postID}
        cancelComment={(e) => setReplyToggle(false)}
        replyToggle={replyToggle}
        key={uuidv4()}
      />
      {reply.map((data, index) => (
        <ReplyComment     userID={items?.userID} replyComments={data} key={data.postID} />
      ))}
    </>
  );
}

export default Comment;
