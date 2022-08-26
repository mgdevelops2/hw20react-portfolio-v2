import React from "react";
import Style from "./AboutMe.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { details } from "../../details/Details";

export default function About() {
  const firstName = details.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: details.baseColor }}>
            {firstName}
            {details.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: details.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {details.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: details.baseColor }}>
            {firstName}
            {details.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: details.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: details.baseColor }}>
          {" "}
          <strong>Proficient With:</strong>
        </p>
        <ul className={Style.skills}>
          {details.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: details.baseColor }}>
          {" "}
          <strong>Exposed to:</strong>
        </p>
        <ul className={Style.skills}>
          {details.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: details.baseColor }}>
            {firstName}
            {details.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: details.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {details.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
