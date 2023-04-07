import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({info}) {
  return (
    <Link to={`/post/${info.id}`}>
        <img src={info.image} alt="" />
        <h3>{info.title}</h3>
    </Link>
  )
}
