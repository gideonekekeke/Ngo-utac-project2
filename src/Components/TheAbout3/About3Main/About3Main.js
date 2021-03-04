import React from "react";
import About3Card from "../About3Card/About3Card";
import "./About3Main.css";
import Pox from "../../Img/ab.jpg";
import Pox1 from "../../Img/ab.jpg";
import Pox2 from "../../Img/ab.jpg";

function About3Main() {
  return (
    <div className="About3MainGeneralDiv">
      <div className="About3MainSubGeneralDiv">
        <div className="topic"> Our Focus</div>
        <div className="CardHold">
          <About3Card
            CardImage={Pox}
            Letter="M"
            Title="Mission"
            Content="Vital conversations, safe spaces, inspiration, and fun"
          />
          <About3Card
            CardImage={Pox1}
            Letter="V"
            Title="Vision"
            Content="Vital conversations, safe spaces, inspiration, and fun"
          />
          <About3Card
            CardImage={Pox2}
            Letter="G"
            Title="Goals"
            Content="Vital conversations, safe spaces, inspiration, and fun"
          />
        </div>
      </div>
    </div>
  );
}

export default About3Main;
