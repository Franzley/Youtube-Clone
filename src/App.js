import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components/exports";

// Website Routing

const App = (props) => {
  const [theme, setTheme] = useState();

  const getTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: theme }}>
        <Navbar getTheme={getTheme} />
        <Routes>
          <Route path="/" exact element={<Feed setTheme={theme} />} />
          <Route path="/video/:id" element={<VideoDetail setTheme={theme} />} />
          <Route
            path="/channel/:id"
            element={<ChannelDetail setTheme={theme} />}
          />
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed setTheme={theme} />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
