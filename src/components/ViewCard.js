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
            <div
              class="col-md-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="icofont-question"></span>
              <h2>What exactly is CosmoInfinitas?</h2>
              <p class="lead">
                Cosmo means World in Greek and Infinitas means Infinity in
                Latin,this means that we the team of Cosmoinfinitas are trying
                to create a Virtual World with infinity Possibilities.
              </p>
            </div>
            <div
              class="col-md-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="icofont-at"></span>
              <h2> Why choose CosmoInfinitas?</h2>
              <p class="lead">
                We are trying to create a world where the complete control over
                the Platform are at the hands of Community. We are creating a
                something similar to LOOT Project which recently changed the NFT
                Community by storm and here we are trying to implement something
                like that to Metaverse
              </p>
            </div>
            <div class="clearfix visible-md-block visible-sm-block"></div>
            <div
              class="col-md-6  col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="icofont-ui-user-group"></span>
              <h2>How will it work?</h2>
              <p class="lead">
                We are a platform where users can buy and sell Land, Avatars and
                other wearables with the security of Ethereum Blockchain on top
                of it. And we will be soon releasing our own LOOT like Project
                named ORE. Exciting times ahead.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewCard;
