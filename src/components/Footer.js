import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="box-container">
            <div className="box">
                <h3> Paula Rotundo </h3>
                <p>Algo de texto.</p>
                <div className="share">
                    <a className='header-link' href="https://sites.google.com/view/ganeshinbound/inicio">
                        <i className="bi bi-book"></i>
                    </a>
                    <a className='header-link' href="">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a className='header-link' href="">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a className='header-link' href="">
                        <i className="bi bi-envelope-paper-heart"></i>
                    </a>
                    <a className='header-link' href="">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
                <div className="box">
                    <h3>Contacto</h3>
                    <a className="links"> <i class="fas fa-phone"></i> +111-111-1111 </a>
                    <a className="links"> <i class="fas fa-envelope"></i> paula@mail.com </a>
                    <a className="links"> <i class="fas fa-map-marker-alt"></i>Argentina </a>
                </div>
                <div className="box">
                    <p>Copyright © 2023 Paula Rotundo</p>
                    <p>Todos los derechos reservados</p>
                </div>
            </div>
        </div>
        <div className="credit">
            <p>Desarrollado por Damián Arrieta | <a href="https://damian-arrieta.com/">https://damian-arrieta.com/</a></p>
        </div>
    </footer>
  )
}
