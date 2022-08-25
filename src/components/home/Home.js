import React from "react";
import me from "../../images/self.png";
import classNames from "classnames";
import Bullet from "../utils/Bullet";
import SocialMedia from "../utils/SocialMedia";
import { Box } from "@mui/material";
import { info } from "../../details/Details";

// import stylesheets
import "./Home.css";
import Style from "./Home.module.scss";

export default function Home() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      // textAlign={"center"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Box
        class="App-logo"
        className={classNames(Style.avatar, Style.shadowed)}
        alt={"image of developer"}
        // style={{ background: info.gradient }}
        component={"img"}
        src={me}
        width={{ xs: "35vh", md: "40vh" }}
        height={{ xs: "35vh", md: "40vh" }}
        borderRadius={"25%"}
        p={"0.75rem"}
        mb={{ xs: "1rem", sm: 0 }}
        mr={{ xs: 0, md: "2rem" }}
      />
      <Box>
        <h1>
          Hey, my name is{" "}
          <span
            style={{
              // background: info.gradient,
              WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName}
          </span>
          <span className={Style.hand}>🤚</span>
        </h1>
        <h2>I'm {info.position}.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <Bullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {info.socials.map((social, index) => (
            <SocialMedia
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
