import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
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

  const formSubmit = async (e) => {
    e.preventDefault();
    // alert(
    //   `Hello, ${data.name}.Your Email Id is ${data.email}.The Subject is ${data.subject} and your feedback is ${data.message}`
    // );
    const { name, email, message } = data;

    if (name && email && message) {
      const res = fetch(
        "https://cosmoinfinitas-00-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (res) {
        setData({
          name: "",
          email: "",
          message: "",
        });
        alert("Message Received Successfully !");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
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
              </div>
            </div>
            <div class="right-side">
              <div class="topic-text">Send us a message</div>
              {/* <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p> */}
              <form method="POST" id="contactform">
                <div class="input-box">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={data.name}
                    onChange={InputEvent}
                    required
                  />
                </div>
                <div class="input-box">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={data.email}
                    onChange={InputEvent}
                    required
                  />
                </div>
                <div class="input-box message-box">
                  <input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Enter a short description"
                    value={data.message}
                    onChange={InputEvent}
                    required
                  />
                </div>
                <div class="button">
                  {/* <input type="button" value="Send" /> */}
                  <button type="submit" onClick={formSubmit}>
                    Send
                  </button>
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
