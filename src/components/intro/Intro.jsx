import "./intro.scss";

import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="right">
        <div className="wrapper">
          <h2>سلام، من</h2>
          <h1> مرتضی ابوالفتحی هستم</h1>
          <h3>عاشق برنامه نویسی  </h3>

          <TypeAnimation
            sequence={["javascript", 3000, "front-end", 3000]}
            speed={9}
            deletionSpeed={20}
            wrapper="h1"
            repeat={Infinity}
          />
        </div>
        <a href="skills">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;

