import React from "react";
import Style from "./Home.module.scss";
import me from "../../images/self.png";
import classNames from "classnames";
import BulletPt from "../utils/BulletPt";
import Social from "../utils/SocialMedia";
import { Box } from "@mui/material";
import { details } from "../../details/Details";
import "./Home.css";
import ContactForm from "../contactForm/ContactForm";

export default function Home() {
  return (
    <>
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"calc(100vh - 175px)"}
      >
        <img class="App-logo" alt="logo" src={me}></img>
        <Box>
          <h1>
            Hey, my name's{" "}
            <span
              style={{
                WebkitBackgroundClip: "text",
              }}
            >
              {details.firstName}
            </span>
            <span className={Style.hand}>🖖🏼</span>
          </h1>
          <h2>And I am {details.position}.</h2>
          <Box component={"ul"} p={"0.8rem"}>
            {details.miniBio.map((bio, index) => (
              <BulletPt key={index} emoji={bio.emoji} text={bio.text} />
            ))}
          </Box>
          <Box
            display={"flex"}
            gap={"1.5rem"}
            justifyContent={"center"}
            fontSize={{ xs: "2rem", md: "2.5rem" }}
          >
            {details.socials.map((social, index) => (
              <Social
                key={index}
                link={social.link}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        gap={"1.5rem"}
        justifyContent={"center"}
        fontSize={{ xs: "2rem", md: "2.5rem" }}
      ></Box>
    </>
  );
}
