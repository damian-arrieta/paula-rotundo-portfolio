import React from 'react'

export default function Card(props) {
  const { title, thumbnail } = props.entryData;
  return (
    <div className="card" style={{ backgroundImage: `url("${thumbnail}")` }}>
        <h3 className="text-white shadow-title">{ title }</h3>
        <a href="">
            <button className="btn-news">Ver más!</button>
        </a>
    </div>
  )
}