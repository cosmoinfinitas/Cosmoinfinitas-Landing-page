import React from "react";
import wip from "./wip";

const Header = () => {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <canvas id="inner_heading-canvas" width="100" height="100"/>
        <div
            class="container position-relative text-center text-lg-start"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="row">
              <div class="col-lg-8">
                <h1>
                  Welcome to <br /> <span>CosmoInfinitas</span>
                </h1>
                <h2>The World Of Infinite Possibilities</h2>

                <div class="btns">
                  <a
                    href="https://cosmoinfinitas-marketplace.vercel.app/"
                    class="btn-menu animated fadeInUp scrollto"
                  >
                    Get Started
                  </a>
                  <a
                    href="https://discord.gg/9YnyyBVjHA"
                    class="btn-book animated fadeInUp scrollto"
                  >
                    Join Our Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default Header;
