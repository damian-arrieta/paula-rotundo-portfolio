import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="box-container">
            <div className="box box-left">
                <h3 className='footer-title'>Paula Rotundo</h3>
                <p className='footer-txt'>Algo de texto.</p>
                <div className="share">
                    <a className='footer-link' href="https://sites.google.com/view/ganeshinbound/inicio">
                        <i className="i-footer bi bi-book"></i>
                    </a>
                    <a className='footer-link' href="">
                        <i className="i-footer bi bi-linkedin"></i>
                    </a>
                    <a className='footer-link' href="">
                        <i className="i-footer bi bi-instagram"></i>
                    </a>
                    <a className='footer-link' href="">
                        <i className="i-footer bi bi-envelope-paper-heart"></i>
                    </a>
                    <a className='footer-link' href="">
                        <i className="i-footer bi bi-whatsapp"></i>
                    </a>
                </div>
            </div>
            <div className="box box-right">
                <p className='copyright'>Copyright © 2023 Paula Rotundo</p>
                <p className='copyright'>Todos los derechos reservados</p>
            </div>
        </div>
        <div className="credit">
            <p className='credit-txt'>Desarrollado por Damián Arrieta | <a className="text-black" href="https://damian-arrieta.com/">www.damian-arrieta.com</a></p>
        </div>
    </footer>
  )
}
