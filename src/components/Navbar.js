import React from "react";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top d-flex align-items-cente">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <a href="index.html" className="logo me-auto me-lg-0">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto "
                href="https://cosmo-marketplace.vercel.app/"
              >
                MarketPlace
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#specials">
                Docs
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#events">
                Events
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#chefs">
                Blogs
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                WhitePaper
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a
          href="#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          Start Exploring
        </a>
      </div>
    </header>
  );
};

export default Navbar;
