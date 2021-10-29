import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top font-link">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 ">
                <div className="footer-info">
                  <img
                    src="assets/img/ft-logo.png"
                    alt=""
                    className="img-fluid"
                  />
                  <p>
                    Burla, Sambalpur <br />
                    Odisha, India
                    <br />
                    <br />
                    <strong>Phone:</strong> +91 7609 96 1010 , +91 9658 00 6706
                    <br />
                    <strong>Email:</strong> cosmoinfinitas@gmail.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype"></i>
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Stay connected with us </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Coming Soon . . ." />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>CosmoInfinitas</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
