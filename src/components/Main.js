// import essentials
import React, { useState } from "react"; // always import react
import { Route, Routes } from "react-router-dom"; // import Route, Routes from react
import { Box, Grid } from "@mui/material"; // importing Box and Grid from mui - look more into this useful tool over Bootstrap later.
import Style from "./Main.module.scss"; // import our stylesheet

// import components to fill page
import Nav from "./Nav"; // import Navbar
import AboutMe from "./aboutMe/AboutMe"; // import About

import Home from "./home/Home"; // import Home
// import Portfolio from "./portfolio/Portfolio"; // import Portfolio

export default function Main() {
  // lets export the Main section

  // lets create a state for darkmode set it to false
  let [darkMode, setDarkMode] = useState(false);

  // function to handle a click of the darkmode toggler
  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    // create parent container w/ the state and its props in a className
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Nav darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<AboutMe />} />
            {/* <Route exact path={"/portfolio"} element={<Portfolio />} /> */}
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
              PortfolioV2 inspired by many, imagined && created by{" "}
              <a href={"#"}>Michael Gonzalez</a>
            </p>
            <p>&copy; 2022</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
