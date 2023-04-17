import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useParams } from 'react-router-dom';
import PostDetail from './PostDetail';
import Navbar from './Navbar';

export default function PostDetailContainer() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getDatabase();
    const postRef = ref(db, `blogs/${id}`);
    onValue(postRef, (snapshot) => {
      const postData = snapshot.val();
      setData(postData);
    });
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <PostDetail data={data} />
      </div>
    </>
  );
}
