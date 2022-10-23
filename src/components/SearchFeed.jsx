import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./exports";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = ({ setTheme }) => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results For:{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} setTheme={setTheme} />
    </Box>
  );
};

export default SearchFeed;
