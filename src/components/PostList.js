import React from 'react';
import Post from './Post';

export default function PostList({data = []}) {
  console.log(data)
  return (
    data.map(blogs => {
      return <Post key={blogs.id} info={blogs}/>
    })
  )
}
