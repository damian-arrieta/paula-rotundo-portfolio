import React from 'react';

export default function PostDetail({ data }) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 m-5">
          <h1>{data.title}</h1>
          <p className="text-muted">08/Abril/2023</p>
        </div>
      </div>
      <div className="container p-2">
        <div className="row">
          <div className="col-md-4">
            <img src={data.image} className="img-fluid rounded" alt={data.title} />
          </div>
          <div className="col-md-8">
            <h2>Subtítulo del blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius quia iste, ipsa soluta excepturi ullam illum, facilis, eos quam odit quod dignissimos modi explicabo nemo nobis assumenda aliquid sed!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At repudiandae eligendi nihil alias, labore, velit itaque corporis sunt expedita dignissimos eaque iure facere necessitatibus! Voluptates deleniti laboriosam tempora placeat commodi?</p>
            <h2>Otro subtítulo del blog</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta veniam molestias ullam, aperiam sed corrupti quidem! Iusto, officiis sint unde vero inventore tenetur quae quam ab quia saepe quos maiores.
            Quidem possimus pariatur deleniti architecto libero iusto aliquid alias earum recusandae natus, magni magnam dolore ad porro! Totam magni eaque fugit numquam in, aspernatur fuga unde ratione. Odit, culpa est.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nobis doloribus, quia tempore id quidem perspiciatis dicta nostrum blanditiis nihil, ipsam sint aspernatur aliquid alias rem harum odio! Eum, nemo.</p>
          </div>
        </div>
      </div>
    </div>
  )
}