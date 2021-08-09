import React, { useState } from "react";
import Captcha from "./captcha";
function Contact() {
  const [contactname, setContactName] = useState("");
  const [contactmessage, setContactMessage] = useState("");

  function SendMessage(event) {
    console.log({ name: contactname, message: contactmessage });

    event.preventDefault();
    setContactName("");
    setContactMessage("");
  }

  //   <script
  //   src="https://vivirenremoto.github.io/doomcaptcha/script.js?version=16"
  //   countdown="on"
  //   label="Captcha"
  //   enemies="4"
  // ></script>

  return (
    <div className="Contactme">
      <h1>Contact me here: </h1>
      <form>
        <div className="inputgap"></div>
        <input
          type="text"
          placeholder="Enter name / email"
          value={contactname}
          onChange={(event) => setContactName(event.target.value)}
        />
        <div className="inputgap"></div>
        <input
          type="text"
          placeholder="Enter message"
          value={contactmessage}
          onChange={(event) => setContactMessage(event.target.value)}
        />
        <div className="inputgap"></div>
        <button onClick={SendMessage}>contact me </button>
      </form>
      {Captcha};
    </div>
  );
}

export default Contact;
