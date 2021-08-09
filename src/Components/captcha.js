import useScript from "../hooks/useScript";

import React from "react";
import Safe from "react-safe";

function Captcha() {
  <script
    src="https://vivirenremoto.github.io/doomcaptcha/script.js?version=16"
    countdown="on"
    label="Captcha"
    enemies="4"
  ></script>;

  //   const captcha = useScript(
  //     "https://vivirenremoto.github.io/doomcaptcha/script.js?version=16"
  //   );

  return (
    <>
      <Safe.script src="https://vivirenremoto.github.io/doomcaptcha/script.js?version=16"></Safe.script>
      <Safe.script>
        {`try{Typekit.load({ async: true });}catch(e){}`}
      </Safe.script>
    </>
  );
}

export default Captcha;
