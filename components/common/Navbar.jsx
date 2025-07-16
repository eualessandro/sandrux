'use client';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <img src="/assets/imgs/logo-light.png" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            {/* Menus ocultados: Demos, Pages, Portfolio, Blogs */}
            {/* <li> ... Demos ... </li> */}
            {/* <li> ... Pages ... </li> */}
            {/* <li> ... Portfolio ... </li> */}
            {/* <li> ... Blogs ... </li> */}
            <li>
              <a className="nav-link" href="/sobre">
                <span className="rolling-text">Sobre</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="/servicos">
                <span className="rolling-text">Serviços</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="/conversar">
                <span className="rolling-text">Vamos conversar?</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/conversar"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Contato</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
