import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (

    <div className="text-purple-500">
      <Typewriter
        options={{
          strings: [
            "Front-End Developer",
            "Freelancer",

          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>


  );
}

export default Type;