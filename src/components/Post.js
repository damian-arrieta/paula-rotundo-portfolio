import React from 'react';

export default function Post({info}) {
  return (
    <a href="">
        <img src={info.image} alt="" />
        <h3>{info.title}</h3>
    </a>
  )
}
