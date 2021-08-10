import React, { useState } from "react";

import axios from "axios";
function Contact() {
  const [contactname, setContactName] = useState("");
  const [contactmessage, setContactMessage] = useState("");

  function SendMessage(event) {
    console.log({ name: contactname, message: contactmessage });
    axios.post("https://formsubmit.co/ad151bf8937fd838695d488d2dd37fc3", {
      contactname,
      contactmessage,
    });
    event.preventDefault();
    setContactName("");
    setContactMessage("");
  }

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
    </div>
  );
}

export default Contact;
