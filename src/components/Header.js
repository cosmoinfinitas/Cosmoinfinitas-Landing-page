import React from "react";

const Header = () => {
  return (
    <>
      {/* <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                Welcome to <br />
                <span>CosmoInfinitas</span>
              </h1>
              <br />
              <h3>An Infinity World of Entertainment</h3>

              <div id="container">
                <div>
                  <button
                    type="submit"
                    class="btn-book animated fadeInUp scrollto"
                  >
                    Get Started
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn-book animated fadeInUp scrollto"
                  >
                    <a
                      className="discord"
                      href="https://discord.gg/kgRAGZHQ"
                      target="_blank"
                    >
                      Join our discord
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="hero" class="d-flex align-items-center">
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
              <h2>An Infinity World of Entertainment</h2>

              <div class="btns">
                <a href="#menu" class="btn-menu animated fadeInUp scrollto">
                  Get Started
                </a>
                <a
                  href="https://discord.gg/kgRAGZHQ"
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
