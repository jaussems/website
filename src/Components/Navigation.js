import React, { useState } from "react";

import MenuBtn from "./menubutton";

function Navigation() {
  const [btnclass, setBtnClass] = useState("menu-list-items");
  function ChangeView() {
    if (btnclass === "menu-list-items") {
      setBtnClass("menu-list-items-active");
    } else if (btnclass === "menu-list-items-active") {
      setBtnClass("menu-list-items");
    }
  }
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
  });

  return (
    <div className="Navigation">
      <nav>
        <ul>
          <li className="menu-btn">
            <MenuBtn onClick={ChangeView} />
            <a href="menu">Menu</a>
          </li>
          <div className={btnclass}>
            <li>
              <a href="#Story">My Story</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#Skills">Skills</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#Portfolio">Portfolio</a>{" "}
            </li>
            <li>
              <a href="#Contact">Contact me</a>
            </li>
            <li>Jannes Aussems</li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
