import React from 'react';

export default function Header() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center header d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="display-5 fw-bold text-center text-principal mb-5">Paula Rotundo</h1>
          <div className="col-lg-6 mx-auto text-center">
            <p className="lead mb-4 text-principal mb-5">¡Bienvenidos! Mi nombre es Pau, creadora de <span className="text-uppercase">ganesh inbound marketing</span> y su blog <span className="text-uppercase">oportuncrisis</span>. En este espacio comparto herramientas para todas aquellas personas que desean llevar a otro nivel sus proyectos, trabajos, emprendimientos y pymes. Gracias por estar aquí.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <ul className="nav justify-content-center pb-3 mb-3">
                <li className="nav-item">
                  <a href="#" className="btn nav-link px-2">
                    <i className="btn btn-lg btn-header bi bi-book"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2">
                    <i className="btn btn-lg btn-header bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2">
                    <i className="btn btn-lg btn-header bi bi-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2">
                    <i className="btn btn-lg btn-header bi bi-envelope-paper-heart"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link px-2">
                    <i className="btn btn-lg btn-header bi bi-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
