import React from "react";
import love from "../videos/love.svg";

const Love = ({ bg, text, img, bg1, bgg, wt, ht, mg }) => {
  return (
    <div
      style={{
        backgroundColor: bg1,
        width: "100%",
        margin: "0px 0",
      }}
    >
      <center>
        <br />
        <div
          style={{
            backgroundColor: bgg,
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "30px",
          }}
        >
          <img
            src={img}
            alt="love"
            style={{
              width: wt,
              height: ht,
              borderRadius: "50%",
              objectFit: "contain",
              marginRight: mg,
            }}
          />
        </div>
        <div
          style={{
            fontSize: "35px",
            // marginBottom: "50px",
            padding: "10px 0",
          }}
        >
          {" "}
          {text}{" "}
        </div>
      </center>
    </div>
  );
};

export default Love;
