import React, { useState } from 'react';
import Card from './Card';

export default function NewsList() {

    const [blogEntry, setBlogEntry] = useState([
        {
          title: 'Oportuncrisis',
          parrafo: '¡Bienvenidos! Mi nombre es Pau, creadora de GANESH INBOUND MARKETING y su blog OPORTUNCRISIS. En este espacio comparto herramientas para todas aquellas personas que desean llevar a otro nivel sus proyectos, trabajos, emprendimientos y pymes. Gracias por estar aquí.',
          thumbnail: '../assets/imgs/oportuncrisis.jpeg',
          image: '../assets/imgs/oportuncrisis.jpeg'
        },
        {
          title: 'Presentación',
          parrafo: 'Aca va la descripcion',
          thumbnail: 'Foto de background',
          image: 'Imagen que va en la publicacion'
        },
        {
          title: 'Estrategia de marketing',
          parrafo: 'Aca va la descripcion',
          thumbnail: 'Foto de background',
          image: 'Imagen que va en la publicacion'
        }
      ]);

  return (
    <section className="news">
    <div className="grid">
        <div className="news-title">
            <h2 className="text-black">Blog</h2>
        </div>
        <div className="cards">
            {
                blogEntry.map( entry => <Card entryData={ entry } />)
            }
        </div>
    </div>
</section>
  )
}
