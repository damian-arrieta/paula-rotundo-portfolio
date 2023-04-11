import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PostDetail from './PostDetail';
import Navbar from './Navbar';
import db from '../Firebase/config';

export default function PostDetailContainer() {
  const [data, setData] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    const postRef = db.ref('posts').child(postId);
    postRef.on('value', (snapshot) => {
      const post = snapshot.val();
      if (post) {
        setData(post);
      } else {
        // aquí se podría mostrar un mensaje de error o redirigir a una página de error
      }
    });
    return () => {
      postRef.off('value');
    };
  }, [postId]);

  return (
    <>
      <Navbar />
      <div className="container">
        <PostDetail data={data} />;
      </div>
    </>
  )
}