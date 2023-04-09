import React from 'react';

export default function Footer() {
  return (
    <div className="container">
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center line-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a href="#" className="nav-link px-2">
                        <i className="bi bi-book text-principal" width="24" height="24"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2">
                        <i className="bi bi-linkedin text-principal" width="24" height="24"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2">
                        <i className="bi bi-instagram text-principal" width="24" height="24"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2">
                        <i className="bi bi-envelope-paper-heart text-principal" width="24" height="24"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-2">
                        <i className="bi bi-whatsapp text-principal" width="24" height="24"></i>
                    </a>
                </li>
            </ul>
            <p className="text-center text-dark">Desarrollado por Damián Arrieta | <a className="text-center text-body-secondary" href="https://damian-arrieta.com/">www.damian-arrieta.com</a></p>
        </footer>
    </div>
  )
}
