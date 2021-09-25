import React from "react";

const ViewCard = () => {
  return (
    <>
      <section id="about" className="text-center about">
      
        <div className="container" data-aos="fade-up">
        <h1>About US</h1>
          <div className="row">
            {/* <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img">
                <img src="assets/img/about.jpg" alt="" />
              </div>
            </div> */}
            {/* <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div> */}
            <div class="col-md-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200" >
              <span class="icofont-ui-user-group"></span>
              <h2>Section 1</h2>
              <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
            <div class="col-md-6 col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
              <span class="icofont-ui-user-group"></span>
              <h2>Section 2 </h2>
              <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
            </div>
            <div class="clearfix visible-md-block visible-sm-block"></div>
            <div class="col-md-6  col-ex-12 about-item wow lightSpeedIn" data-wow-offset="200">
              <span class="icofont-ui-user-group"></span>
              <h2>Section 3</h2>
              <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewCard;
