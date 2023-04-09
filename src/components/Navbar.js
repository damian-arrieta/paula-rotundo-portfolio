import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3 mb-4 line-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to={"/"} className="d-inline-flex link-body-emphasis text-decoration-none">
          <h2 className='text-principal'>Paula Rotundo</h2>
        </Link>
      </div>

      <div className="col-md-3 text-end">
        <a className='btn btn-navbar me-2' href="https://sites.google.com/view/ganeshinbound/inicio">
          <i className="bi bi-book"></i>
        </a>
        <a className='btn btn-navbar me-2' href="">
          <i className="bi bi-linkedin"></i>
        </a>
        <a className='btn btn-navbar me-2' href="">
          <i className="bi bi-instagram"></i>
        </a>
        <a className='btn btn-navbar me-2' href="">
          <i className="bi bi-envelope-paper-heart"></i>
        </a>
        <a className='btn btn-navbar me-2' href="">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </nav>
  )
}
