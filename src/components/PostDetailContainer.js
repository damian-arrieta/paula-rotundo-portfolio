import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PostDetail from './PostDetail';
import Navbar from './Navbar';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function PostDetailContainer() {
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'Posts', id);
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
    }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <PostDetail data={data} />;
      </div>
    </>
  )
}
