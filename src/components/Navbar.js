import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to={'/'}>Paula Rotundo</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className='header-link' href="https://sites.google.com/view/ganeshinbound/inicio">
                <i className="bi bi-book"></i>
                </a>
                </li>
                <li className="nav-item">
                <a className='header-link' href="">
                <i className="bi bi-linkedin"></i>
                </a>
                </li>
                <li className="nav-item">
                <a className='header-link' href="">
                <i className="bi bi-instagram"></i>
                </a>
                </li>
                <li className="nav-item">
                <a className='header-link' href="">
                <i className="bi bi-envelope-paper-heart"></i>
                </a>
                </li>
                <li className="nav-item">
                <a className='header-link' href="">
                <i className="bi bi-whatsapp"></i>
                </a>
                </li>
            </ul>
            </div>
    </nav>
  )
}
