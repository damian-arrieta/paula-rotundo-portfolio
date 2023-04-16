import React from 'react';

export default function PostDetail({ data }) {
console.log(data.content)
  return (
    <div>
      <p>Este es el detalle del post con ID {data.id}</p>
      <p>Este es el detalle {data.content}</p>
    
    </div>
  )
}
