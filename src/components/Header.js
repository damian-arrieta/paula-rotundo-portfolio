import React from 'react';

export default function Header() {
  return (
    <>
    <div className="container">
        <div className="container-title">
            <h1 className='title-home'>Paula Rotundo</h1>
        </div>
        <div className="container-bottom">
            <h2 className='profession'>Tu profesión.</h2>
            <div className="links">
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
        </div>
    </div>
    </>
  )
}
