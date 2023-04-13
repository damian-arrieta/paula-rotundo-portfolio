import React from 'react';
import Post from './Post';

export default function PostList({data = []}) {
  return (
    data.map(post => <Post key={post.id} info={post} id={post.id} />)
  )
}