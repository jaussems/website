import React from "react";
import localpicture from "../Jannes1.jpg";
function MyStory() {
  return (
    <div className="MyStory">
      {/* <div className="Mystorybox"> */}
      <div className="Mystoryimage">
        <img className="secondImg" src={localpicture} alt="picture of me " />
      </div>
      {/* <div className="storygap"></div> */}
      <div className="Mystorytext">
        <h1> My story </h1>
        <p>
          My name is Jannes I am 24 years old and currently live in Purmerend.
          As a young boy I was always busy with computers, being a little bit of
          a nerd / geek in my earlier years i discovered that PC and IT in
          general facinate me.
        </p>

        <p>
          After trying multiple different things throughout my life, for example
          becoming a social worker, I realized I had to follow my true
          ambitions: to become a programmer. To do this was going to be a though
          challenge, one does not simply become one overnight, one does through
          working hard and to keep learning.{" "}
        </p>

        <p>
          I signed up for the Codaisseur Full Stack Bootcamp this year to fulfil
          my dream, after 11 intensive weeks of grueling tasks and assesment I
          managed to overcome obstacles and suceed allong side my peers. I know
          certain technologies you can see listed below and I battled it out
          with imposter-syndrome. I can now call myself a developer even though
          there is much to learn. I keep learning I keep growing, a little bit
          better each day is still a little bit.
        </p>

        <div className="MyStorybadges">
          <a href="https://www.linkedin.com/in/jannesaussems/">
            <img
              align="left"
              alt="LinkedIn"
              width="30px"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
            />
          </a>
          {/* <div className="gapbtwnbadges"></div> */}
          <a href="https://github.com/jaussems">
            <img
              align="left"
              width="30px"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              border="0"
              alt="github logo"
            />
          </a>
          {/* <div className="gapbtwnbadges"></div> */}
          <a href="https://docdro.id/5k68sLY">
            <button className="dwnldbtn">Download CV</button>
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default MyStory;
