import React from 'react'

export default function Home() {
  return (
    <section className="news">
        <div className="grid">
            <div className="news-title">
                <h2 className="text-black">Blog</h2>
            </div>
            <div className="cards">
                <div className="card card-1">
                    <h3 className="text-white shadow-title">Oportuncrisis</h3>
                    <a href="">
                        <button className="btn-news">Ver</button>
                    </a>
                </div>
                <div className="card card-2">
                    <h3 className="text-white shadow-title">Presentación</h3>
                    <a href="">
                        <button className="btn-news">Ver</button> 
                    </a>
                </div>
                <div className="card card-3">
                    <h3 className="text-white shadow-title">Estrategia de márketing</h3>
                    <a href="">
                        <button className="btn-news">Ver</button>
                    </a> 
                </div>
            </div>
        </div>
    </section>
  )
}
