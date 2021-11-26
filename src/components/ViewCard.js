import React from "react";

const ViewCard = () => {
  return (
    <>
      <section id="about" className="text-center about">
        <div className="container" data-aos="fade-up">
          <h1>About US</h1>
          <div class="row">
            <div class="col-md-4 pt-3 pt-lg-0 content">
              <div
                class="col-md-12 col-ex-12 about-item wow lightSpeedIn"
                data-wow-offset="200"
              >
                <span class="icofont-question"></span>
                <h2>What exactly is CosmoInfinitas?</h2>
                <p class="lead">
                  Cosmoinfinitas is a community driven metaverse wherein a
                  virtual world with infinity possibilities exists.
                </p>
              </div>
            </div>
            <div
              class="col-md-4  col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="icofont-ui-user-group"></span>
              <h2>How will it work?</h2>
              <p class="lead">
                This platform enables its users to buy and sell Land, Avatars,
                and other wearables with the security of Ethereum Blockchain on
                top of it. Apart from this, we will soon be releasing our own
                loot like project named ORE.
              </p>
            </div>
            <div
              class="col-md-4 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="icofont-at"></span>
              <h2 id="choose"> Why choose CosmoInfinitas?</h2>
              <p class="lead">
                We are creating a platform influenced by the recent Loot project
                which added spark to the world of NFT community through its
                exclusive approach. Cosmoinfinitas is trying to implement
                something similar to the LOOT Project with Metaverse.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              class="col-lg-12 video-box align-self-baseline justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src="assets/img/post.png"
                class="img-fluid"
                alt=""
                width="700px"
              />
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                class="glightbox play-btn mb-4"
              >
                {" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewCard;
