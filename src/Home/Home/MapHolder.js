import React from "react";
import bg from "../videos/bg.png";

const MapHolder = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          // backgroundColor: "red",
          width: "300px",
        }}
      >
        <img
          src={bg}
          alt="bg"
          style={{
            width: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <div
        style={{
          // backgroundColor: "red",
          width: "300px",
          textAlign: "left",
          marginLeft: "10px",
        }}
      >
        <h2>Lorem Ipsum is a dummy </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </p>
        <h2>Lorem Ipsum is a dummy </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </p>
        <h2>Lorem Ipsum is a dummy </h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s,
        </p>
      </div>
    </div>
  );
};

export default MapHolder;
