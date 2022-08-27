import React, { useState } from "react";
import Style from "./Nav.module.scss";
import Toggler from "./utils/ToggleBtn";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { details } from "../details/Details";

const links = [
  {
    name: details.initials,
    type: "initials",
    to: "/hw20react-portfolio-v2/",
    active: "home",
  },
  {
    name: "about",
    to: "/hw20react-portfolio-v2/aboutMe",
    active: "aboutMe",
  },

  {
    name: "portfolio",
    to: "/hw20react-portfolio-v2/portfolio",
    active: "portfolio",
  },
  {
    name: "contact",
    to: "/hw20react-portfolio-v2/contactForm",
    active: "contactMe",
  },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/"
      ? "home"
      : location.pathname.slice(1, location.pathname.length)
  );

  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            className={link.active === active && !link.type && Style.active}
            sx={{ borderImageSource: details }}
          >
            <Link to={link.to} onClick={() => setActive(link.active)}>
              {!link.type && (
                <p style={{ paddingBottom: "0.5rem" }}>{link.name}</p>
              )}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li>
          <a
            href="https://drive.google.com/file/d/1C7Xux-yypJCIU5KcisPC2K_0dsFTA8_m/view?usp=sharing"
            target="_blank"
            rel="norefferer"
          >
            resume
          </a>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
