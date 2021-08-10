import React from "react";
import localpicture from "../Jannes1.jpg";
function MyStory() {
  return (
    <div className="MyStory">
      <div className="Mystoryimage">
        <img className="secondImg" src={localpicture} alt="picture of me " />
      </div>

      <div className="Mystorytext">
        <h1 style={{ marginTop: "1em" }}> My story </h1>
        <p>
          My name is Jannes I am 24 years old and currently live in Purmerend.
          As a young boy I was always busy with computers, started gaming and
          fixing / reparing computers a lot in my earlier years, I discovered at
          a young age that PC and IT in general fascinate me.
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
          my dream, after 11 intensive weeks of building awesome webbaps and
          completing assessments I managed to overcome obstacles and suceed
          along side my peers. I know certain technologies you can see listed
          below. Eventhoug now I can call myself a developer ,there still much
          to learn learn. My mission is continuous learning, I keep learning, I
          keep growing, a little bit better each day is still a little bit!
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

          <a href="https://github.com/jaussems">
            <img
              align="left"
              width="30px"
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              border="0"
              alt="github logo"
            />
          </a>

          <a href="https://docdro.id/LHkTU08">
            <button className="dwnldbtn">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyStory;
