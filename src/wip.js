import React from "react";
import "./wip.css";
const wip = () => {
  return (
    <div>
      <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                WORK IN <span> PROGRESS</span>
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                An Infinity World of Entertainment
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a
                    href="/"
                    class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Get Back To HOME </span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
              {/* <div class="btns">
                <a href="/" class="btn-menu animated fadeInUp scrollto">
                  <span>Get Back To HOME </span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div> */}
            </div>
            <div
              class="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src="assets/img/wip.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default wip;
