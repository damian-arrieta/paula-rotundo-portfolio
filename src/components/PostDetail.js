import React from 'react';

export default function PostDetail({ data }) {

  return (
    <div>
      <p>Este es el detalle del post con ID {data.id}</p>
    </div>
  )
}
