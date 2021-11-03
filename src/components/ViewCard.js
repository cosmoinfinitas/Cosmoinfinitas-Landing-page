import React from "react";

const ViewCard = () => {
  return (
    <>
      <section id="about" className="text-center about">
        <div className="container" data-aos="fade-up">
          <h1>About US</h1>
          <div className="row">
            <div
              class="col-md-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="icofont-question"></span>
              <h2>What exactly is CosmoInfinitas?</h2>
              <p class="lead">
                Cosmoinfinitas is a community driven metaverse wherein a virtual
                world with infinity possibilities exists.
              </p>
            </div>
            <div
              class="col-md-6 col-ex-12 about-item wow lightSpeedIn"
              data-wow-offset="200"
            >
              <span class="icofont-at"></span>
              <h2> Why choose CosmoInfinitas?</h2>
              <p class="lead">
                We are creating a platform influenced by the recent Loot project
                which added spark to the world of NFT community through its
                exclusive approach. Cosmoinfinitas is trying to implement
                something similar to the LOOT Project with Metaverse.
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
                This platform enables its users to buy and sell Land, Avatars,
                and other wearables with the security of Ethereum Blockchain on
                top of it. Apart from this, we will soon be releasing our own
                loot like project named ORE.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewCard;
