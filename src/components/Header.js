import React from 'react';

export default function Header() {

  const handleChatClick = () => {
    const phoneNumber = '+5492954843177';
    const message = encodeURIComponent('Hola, he visto tu página web y quisiera saber como Ganesh puede ayudarme con...');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const emailAddress = 'ganeshinbound@gmail.com';
    const subject = encodeURIComponent('Consulta de servicio');
    const body = encodeURIComponent('Hola Paula, quisera conocer mas de tus servicios...');
    const emailUrl = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    window.location.href = emailUrl;
  };

  return (
    <>
      <div className="px-4 py-5 my-5 text-center header d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="display-5 fw-bold text-center text-principal mb-5">Paula Rotundo</h1>
          <div className="col-lg-6 mx-auto text-center">
            <p className="lead mb-4 text-principal mb-5">¡Bienvenidos! Mi nombre es Pau, creadora de <span className="text-uppercase">ganesh inbound marketing</span> y su blog <span className="text-uppercase">oportuncrisis</span>. En este espacio comparto herramientas para todas aquellas personas que desean llevar a otro nivel sus proyectos, trabajos, emprendimientos y pymes. Gracias por estar aquí.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <div className="col">
                <div className="row">
                  <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item">
                      <a href="https://sites.google.com/view/ganeshinbound/inicio" className="btn nav-link px-2 link-header" target="_blank" rel="noreferrer">
                        <i className="btn btn-lg btn-header bi bi-book"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.linkedin.com/in/paula-rotundo-20b886241/" className="nav-link px-2 link-header" target="_blank" rel="noreferrer">
                        <i className="btn btn-lg btn-header bi bi-linkedin"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="https://www.instagram.com/ganeshinbound/" className="nav-link px-2 link-header" target="_blank" rel="noreferrer">
                        <i className="btn btn-lg btn-header bi bi-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <ul className="nav justify-content-center pb-3 mb-3">
                    <li className="nav-item">
                      <a href="https://www.tiktok.com/@ganeshinbound" className="nav-link px-2 link-header" target="_blank" rel="noreferrer">
                        <i className="btn btn-lg btn-header bi bi-tiktok"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <button onClick={handleEmailClick} className="nav-link px-2 link-header">
                        <i className="btn btn-lg btn-header bi bi-envelope-paper-heart"></i>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button onClick={handleChatClick} className="nav-link px-2 link-header">
                        <i className="btn btn-lg btn-header bi bi-whatsapp"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}