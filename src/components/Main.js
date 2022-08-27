import React, { useState } from "react";
import Style from "./Main.module.scss";
import Navbar from "./Nav";
import Home from "./home/Home";
import AboutMe from "./aboutMe/AboutMe";
import Portfolio from "./portfolio/Projects";
import ContactForm from "./contactForm/ContactForm";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

export default function Main() {
  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/hw20react-portfolio-v2"} element={<Home />} />
            <Route
              exact
              path={"/hw20react-portfolio-v2/aboutMe"}
              element={<AboutMe />}
            />
            {/* <Route exact path={"/resume"} element={<Resume />} /> */}
            <Route
              exact
              path={"/hw20react-portfolio-v2/contactForm"}
              element={<ContactForm />}
            />
            <Route
              exact
              path={"/hw20react-portfolio-v2/portfolio"}
              element={<Portfolio />}
            />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>
              Portfolio.v2 imagined && created by
              <a href={"http://mikegonz0.dev"}>Michael Gonzalez</a>
            </p>
            <p>&copy; 2022</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
