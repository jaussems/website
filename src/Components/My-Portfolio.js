import React from "react";

function Portfolio() {
  return (
    <div className="Portfolio">
      <h2 style={{ marginTop: "2.5em" }}>My portfolio</h2>
      <div>
        <a href="https://see-crypto-app.netlify.app/">
          <img
            alt="icon"
            className="icons"
            src="https://image.flaticon.com/icons/png/512/991/991959.png"
          />
          The Crypto App
        </a>
      </div>
      <div>
        <a href="https://walking-tour.netlify.app/">
          <img
            alt="icon"
            className="icons"
            src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Sports-Walking-icon.png"
          />
          Walking tour app
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
