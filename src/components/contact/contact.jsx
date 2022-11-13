import React from "react";
import "./contact.scss";

const Contact = () => {

  return (
    <div className="contact" id="contact">
      <div className="right">
        <div className="item-contact">
          <a href="https://www.linkedin.com/in/morteza-abolfathi-232843238/">LinkDin</a>
          <img src="assets/linkedin.png" alt="Linkedin icon" />
        </div>
        <div className="item-contact">
          <a href="https://join.skype.com/invite/BFtUFcnzzGBX">Skype</a>
          <img src="assets/skype.png" alt="phone icon" />
        </div>
        <div className="item-contact">
          <a href="https://github.com/mortezaabolfathi">Github</a>
          <img src="assets/gitHub.png" alt="github icon" />
        </div>
        <div className="item-contact">
          <a href="morteza.abolfathi73@gmail.com">morteza.abolfathi73@gmail.com</a>
          <img src="assets/Gmail.png" alt="gmail icon" />
        </div>
        <div className="item-contact">
          <a href="">شماره تماس 09359919333</a>
          <img src="assets/phone.jpg" alt="phone icon" />
        </div>
      </div>
      <div className="left">
        <img src="assets/connect.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;
