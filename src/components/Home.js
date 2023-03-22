import React from 'react'

export default function Home() {
  return (
    <section class="eventos">
        <div class="grid">
            <div class="cards">
                <div class="card card-1">
                    <h3 class="text-white">Oportuncrisis</h3>
                    <a href="">
                        <button class="btn btn-light">Leer</button>
                    </a>
                </div>
                <div class="card card-2">
                    <h3 class="text-white">Presentación</h3>
                    <a href="">
                        <button class="btn btn-light">Leer</button> 
                    </a>
                </div>
                <div class="card card-3">
                    <h3 className="text-white">Estrategia de márketing</h3>
                    <a href="">
                        <button className="btn btn-light">Leer</button>
                    </a> 
                </div>
            </div>
        </div>
    </section>
  )
}
