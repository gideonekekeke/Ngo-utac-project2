import React from "react";
import CardProps from "./CardProps";
import checkmark from "../videos/checkmark.svg";
import hands from "../videos/hands.svg";
import data from "../videos/data.svg";
import global from "../videos/global.svg";

const FeatureCard = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#F3F5FB",
      }}
    >
      <CardProps
        header="Lorem Ipsum"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        img={checkmark}
        bg="#FFDE00"
      />

      <CardProps
        header="Lorem Ipsum"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        img={global}
        bg="#488D02"
      />

      <CardProps
        header="Lorem Ipsum"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        img={data}
        bg="#EF0303"
      />

      <CardProps
        header="Lorem Ipsum"
        detail="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        img={hands}
        bg="black"
      />
    </div>
  );
};

export default FeatureCard;
