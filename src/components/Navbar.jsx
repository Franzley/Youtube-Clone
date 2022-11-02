import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants.js";
import SearchBar from "./SearchBar.jsx";
import { useState, useEffect } from "react";
import { Brightness3, BrightnessHigh } from "@mui/icons-material";

const Navbar = (props) => {
  // https://medium.com/swlh/dark-mode-in-react-with-localstorage-d59270295909
  // Local Storage
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "#000"
      : localStorage.getItem("theme")
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    props.getTheme(theme);
  }, [theme]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: theme,
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Stack direction="row">
        {theme === "#000" && (
          <button className="clay-dark"
            onClick={() => {
              setTheme("#fff");
            }}
          >
            <BrightnessHigh />
          </button>
        )}
        {theme === "#fff" && (
          <button className="clay-light"
            onClick={() => {
              setTheme("#000");
            }}
          >
            <Brightness3 />
          </button>
        )}
      </Stack>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
