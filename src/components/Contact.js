import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    subject: "",
    message: "",
    email: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Hello, ${data.name}.Your Email Id is ${data.email}.The Subject is ${data.subject} and your feedback is ${data.message}`
    );
  };
  const style = {
    border: "0",
    width: "100%",
    height: "290px",
  };
  const s = {
    color: "white",
    textalign: "center",
  };
  return (
    <>
      <section id="contact" class="contact">
        {/* <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
            <p style={s}>Contact Us</p>
          </div>

          <div class="row" >
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i class="icofont-reddit"></i>
                  <h4>Join Our Discord</h4>
                  <br />
                </div>

                <div class="email">
                  <i class="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div class="phone">
                  <i class="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>
                <br />

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2708389932204!2d83.90192878329283!3d21.49710889006581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da4ec28af2d%3A0xb33a5cc9af8c33c7!2sVeer%20Surendra%20Sai%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1629637740810!5m2!1sen!2sin"
                  frameborder="0"
                  style={style}
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                class="php-email-form"
                onSubmit={formSubmit}
              >
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      value={data.name}
                      onChange={InputEvent}
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="name">Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      value={data.email}
                      id="email"
                      onChange={InputEvent}
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div class="validate"></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                    id="subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars of subject"
                  />
                  <div class="validate"></div>
                </div>
                <div class="form-group">
                  <label for="name">Message</label>
                  <textarea
                    class="form-control"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                    rows="12"
                    data-rule="required"
                    data-msg="Please write something for us"
                  ></textarea>
                  <div class="validate"></div>
                </div>
                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        <div class="section-title">
          <p style={s}>Contact Us</p>
        </div>
        <div class="containe">
          <div class="conten">
            <div class="left-side">
              <div class="address details">
                <i class="icofont-address-book"></i>
                <div class="topic">Address</div>
                <div class="text-one"> Burla, Sambalpur </div>
                <div class="text-two">Odisha, India</div>
              </div>
              <div class="phone details">
                <i class="icofont-phone"></i>
                <div class="topic">Phone</div>
                <div class="text-one">+91 7609 96 1010</div>
                <div class="text-two">+91 9658 00 6706</div>
              </div>
              <div class="email details">
                <i class="icofont-send-mail"></i>
                <div class="topic">Email</div>
                <div class="text-one">cosmoinfinitas@gmail.com</div>
                <div class="text-two">imabhisekyadav@gmail.com</div>
              </div>
            </div>
            <div class="right-side">
              <div class="topic-text">Send us a message</div>
              {/* <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p> */}
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div class="input-box message-box">
                  <input type="text" placeholder="Enter a short description" />
                </div>
                <div class="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
