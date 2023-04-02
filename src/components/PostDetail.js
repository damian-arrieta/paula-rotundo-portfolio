import React from 'react'

export default function PostDetail({data}) {
  return (
    <div>
        <h1>{data.title}</h1>
        <img src={data.image} alt="" />
        <p>{data.content}</p>
    </div>
  )
}
