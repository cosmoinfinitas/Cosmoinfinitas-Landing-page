import React from "react";
import {useHistory} from 'react-router-dom'

const c={
  color:'white'
}

const Navbar = () => {
  const history = useHistory();
  const handleOnClick =() => {history.push('../market')}
  return (
    <header id="header" className="fixed-top d-flex align-items-cente">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <a href="index.html" className="logo me-auto me-lg-0">
          <img
            src="assets/img/ci.png"
            alt=""
            className="img-fluid"
            width="70px"
            id="logo"
          />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                <strong>HOME</strong>
              </a>
            </li>
            {/* <li>
               <a
                className="nav-link scrollto "
                href="#market" onClick={handleOnClick}
              >
                <strong>MARKETPLACE</strong>
              </a> 
            </li> */}
            <li>
              <a className="nav-link scrollto" href="#about">
                <strong>ABOUT</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#specials">
                <strong>DOCS</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#events">
                <strong>EVENTS</strong>
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="https://medium.com/@cosmoinfinitas"
              >
                <strong>BLOGS</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                <strong>WHITEPAPER</strong>
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                <strong>CONTACT</strong>
              </a>
            </li>
            <li>
               {/* <a
                className="nav-link scrollto "
                href="#market" onClick={handleOnClick}
              >
                <strong>MARKETPLACE</strong>
              </a>  */}
              <div class="dropdown">
  <a class="btn dropdown-toggle" href="#market" onClick={handleOnClick} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <strong> MARKETPLACE</strong>
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="https://www.google.com">ETHEREUM</a></li>
    <li><a class="dropdown-item" href="#">BINANCE</a></li>
    <li><a class="dropdown-item" href="#">POLYGON</a></li>
  </ul>
</div>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <a
          href="#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          <strong>Start Exploring</strong>
        </a> */}
    
      
      </div>
    </header>
  );
};

export default Navbar;
