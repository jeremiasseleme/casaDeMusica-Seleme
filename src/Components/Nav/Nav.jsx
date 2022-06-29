//@ts-check
import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Nav.css";
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark mb-4">
  <div className="container-fluid">
  <Link to="/" className="text-decoration-none nav-link"><img className="img_logo"
                        src="https://lacasadelmusico.com.ar/wp-content/uploads/2020/09/logo_final-e1599774278834.png"
                        alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 navBar">
        <Link to="/" className="text-decoration-none nav-link"><li className="nav-item">Inicio</li></Link>
        <Link to="/contacto" className="text-decoration-none nav-link"><li className="nav-item">Contacto</li></Link>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu dropDown" aria-labelledby="navbarDropdown">
            <Link to="/category/cuerdas" className="text-decoration-none"><li className="dropdown-item">Cuerdas</li></Link>
            <li><hr className="dropdown-divider"/></li>
            <Link to="/category/vientos" className="text-decoration-none"><li className="dropdown-item">Vientos</li></Link>
            <li><hr className="dropdown-divider"/></li>
            <Link to="/category/percusion" className="text-decoration-none"><li className="dropdown-item">Percusion</li></Link>
          </ul>
        </li>
      </ul>
      <CartWidget />
    </div>
  </div>
</nav>
    )
}
