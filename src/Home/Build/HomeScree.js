import React from "react";
import Capture from "../Home/Capture";
import FeatureCard from "../Home/FeatureCard";
import HomeStart from "../Home/HomeStart";
import Love from "../Home/Love";
import MapHolder from "../Home/MapHolder";
import Partner from "../Home/Partner";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import love from "../videos/love.svg";
import ttt from "../videos/111.png";
import Story from "../Home/Story";
import SuccessStory from "../Home/SuccessStory";
import Total from "../Home/Total";
import Trusted from "./TrustedBy";
import { motion } from "framer-motion";

const HomeScreen = () => {
  const fadeLeft = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
    >
      <center>
        <HomeStart />

        <Partner />
        <Capture />
        <FeatureCard />
        <Love
          text="Our Community"
          bg="red"
          img={love}
          bgg="red"
          wt="50px"
          ht="50px"
        />
        <MapHolder />
        <Love
          text="Our Founders"
          bg="black"
          img={ttt}
          bg1="#F4F6FC"
          bgg="black"
          wt="100%"
          ht="100%"
          mg="5px"
        />
        <Story />
        <Total />
        <SuccessStory />
      </center>
    </motion.div>
  );
};

export default HomeScreen;
