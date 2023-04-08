import React from 'react';

export default function PostDetail({ data }) {
  if (!data) {
    return null; // retorna null si data no existe o es falsy
  }

  return (
    <div>
        <h1>{data.title}</h1>
        <img src={data.image} alt={data.title} />
        <p>{data.content}</p>
    </div>
  )
}