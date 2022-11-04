import Logo from "../images/Logo.png";
import React, { useState } from "react";
import Style from "./Nav.module.scss";
import Toggler from "./utils/ToggleBtn";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { details } from "../details/Details";

const links = [
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
    // <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm my-1">
    //   <div class="container container-fluid">
    // <a class="navbar-brand" href="#"
    // ><img
    //     id="MGD-logo"
    //     src={Logo}
    //     alt="MGD-Logo"
    //     draggable="false"
    //     height="75"
    //   /></a>
    // <button
    //   class="navbar-toggler"
    //   type="button"
    //   data-bs-toggle="collapse"
    //   data-bs-target="#navbarSupportedContent"
    //   aria-controls="navbarSupportedContent"
    //   aria-expanded="false"
    //   aria-label="Toggle navigation"
    // >
    //   <i class="fas fa-bars"></i>
    // </button>
    // <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //   <ul class="navbar-nav ms-auto align-items-center">
    //     <li class="nav-item">
    //       <a class="nav-link btn btn-outline-secondary mx-2" href="#!">About Me</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link btn btn-outline-secondary mx-2" href="#!">Portfolio</a>
    //     </li>
    //     <li class="nav-item dropdown">
    //       <a class="nav-link dropdown-toggle btn btn-outline-secondary" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //         Services
    //       </a>
    //       <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    //         <li><a class="dropdown-item" href="#">Design</a></li>
    //         <li><a class="dropdown-item" href="#">Web Development</a></li>
    //         <li><hr class="dropdown-divider"></hr></li>
    //         <li><a class="dropdown-item" href="#">Book a consultation</a></li>
    //       </ul>
    //     </li>

    //     <li class="nav-item ms-3">
    //       <a class="btn btn-outline-secondary" href="#!">Resume</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link btn btn-outline-secondary mx-2" href="#!">Contact</a>
    //     </li>
    //     <li>
    //       <Toggler darkMode={darkMode} handleClick={handleClick} />
    //     </li>
    //   </ul>

    // </div>
    //   </div>
    // </nav>

    <Box
      class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm my-1"
      component={"nav"}
      width={"100%"}
    >
      <Box
        class="container container-fluid"
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        fontSize={"1rem"}
      >
        <a class="navbar-brand" href="/hw20react-portfolio-v2/">
          <img
            id="MGD-logo"
            src={Logo}
            alt="MGD-Logo"
            draggable="false"
            height="75"
          />
        </a>

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
        <li class="nav-item ms-3">
          <a
            class="btn btn-outline-secondary btn-rounded"
            href="https://drive.google.com/file/d/1C7Xux-yypJCIU5KcisPC2K_0dsFTA8_m/view?usp=sharing"
            target="_blank"
            rel="norefferer"
          >
            Resume
          </a>
        </li>
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
