import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({info}) {
  return (
    <div className="col">
      <Link to={`/post/${info.id}`}>
        <div className="card shadow-sm">
          <img src={info.image} className="bd-placeholder-img card-img-top" width="100%" height="225"></img>
          <div className="card-body">
            <h2 className="card-text">{info.title}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
