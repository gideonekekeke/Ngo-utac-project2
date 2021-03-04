import React from "react";
import alfred from "../videos/19.png";
import fatima from "../videos/19.png";

const Story = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#F4F6FC",
        paddingTop: "30px",
      }}
    >
      <div
        style={{
          width: "300px",
          // backgroundColor: "red",
          marginTop: "10px",
          display: "flex",
          marginRight: "120px",
        }}
      >
        <div>
          <img
            src={fatima}
            alt="name"
            style={{
              width: "350px",
              height: "450px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "60px",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            right: "100px",
            textAlign: "left",
          }}
        >
          <h3>FOUNDER (UTAC)</h3>
          <div>NAME</div>
          <p>Lorem Ipsum has been the industry's</p>
        </div>
      </div>

      <div
        style={{
          width: "300px",
          // backgroundColor: "blue",
          marginTop: "10px",
          display: "flex",
          marginRight: "120px",
        }}
      >
        <div>
          <img
            src={alfred}
            alt="name"
            style={{
              width: "350px",
              height: "450px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "60px",
            // backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            fontSize: "12px",
            right: "100px",
            textAlign: "left",
          }}
        >
          <h3>CO - FOUNDER</h3>
          <div>name</div>
          <p>Lorem Ipsum has been the industry's</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
