import React from 'react';
import Post from './Post';

export default function PostList({data = []}) {
  console.log('Data:', data); // Agregamos esto para verificar que se reciben los datos correctamente
  return (
    data.map(post => <Post key={post.id} info={post} />)
  )
}
