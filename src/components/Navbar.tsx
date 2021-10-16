
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-fawn">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="drink logo" height="30" />
            DRINKLY
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link className="nav-link" to="/drinks">Drinks</Link>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><button className="dropdown-item" >Action</button></li>
                  <li><button className="dropdown-item" >Another action</button></li>
                  <li><button className="dropdown-item" >Something else here</button></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
