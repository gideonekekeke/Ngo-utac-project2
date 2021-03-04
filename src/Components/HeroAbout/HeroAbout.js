import React from "react";
import "./Heroabout.css";
import back from "../../Components/AboutPage/picture/12.jpeg";

function HeroAbout() {
  return (
    <div className="thefirsPart1">
      <div className="backGoundOpacity1">
        <div className="SubHeroAboutDiv">
          <div className="BigText1">OUR MODEL,</div>
          <div className="BigText1"> OUR IMPACT</div>
          <div style={{ fontWeight: "bold" }} className="SmallText">
            Adolescents in developing countries are being left behind when it
            comes to health. We know how to reach them.
          </div>
        </div>
        {/* <div className="thecontent"> */}
        {/* <div className="getInTouch1">
          <h1>OUR MODEL, OUR IMPACT</h1>
          <h4>
            {" "}
            Adolescents in developing countries are being left behind when it
            comes to health. We know how to reach them.
          </h4>
        </div>

        {/* </div> */}
      </div>
    </div>

    // <div className="HeroAboutDiv">
    //   {/* <img
    //     src={back}
    //     style={{ height: "100%", wight: "100%", objectFit: "cover" }}
    //   /> */}
    //   <div className="SubHeroAboutDiv">
    //     <div className="BigText1">OUR MODEL,</div>
    //     <div className="BigText1"> OUR IMPACT</div>
    //     <div style={{ fontWeight: "bold" }} className="SmallText">
    //       Adolescents in developing countries are being left behind when it
    //       comes to health. We know how to reach them.
    //     </div>
    //   </div>
    // </div>
  );
}

export default HeroAbout;
