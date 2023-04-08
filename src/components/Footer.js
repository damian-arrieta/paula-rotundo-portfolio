import React from 'react';

export default function Footer() {
  return (
    <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                    <i className="i-footer bi bi-book" width="24" height="24"></i>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                    <i className="i-footer bi bi-linkedin" width="24" height="24"></i>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                    <i className="i-footer bi bi-instagram" width="24" height="24"></i>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                    <i className="i-footer bi bi-envelope-paper-heart" width="24" height="24"></i>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                    <i className="i-footer bi bi-whatsapp" width="24" height="24"></i>
                </a>
            </li>
        </ul>
        <p className="text-center text-body-secondary">Desarrollado por Damián Arrieta | <a className="text-black" href="https://damian-arrieta.com/">www.damian-arrieta.com</a></p>
    </footer>
  )
}
