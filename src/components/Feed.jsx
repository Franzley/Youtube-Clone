import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./exports";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = (props) => {
  // Change categories from sidebar with a default of New
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // Run fetch on each change of category
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    // Sidebar Section
    <Stack direction={{ xs: "column", md: "row" }}>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setTheme={props.setTheme}
      />

      {/* Videos Section */}
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          borderTop: "1px solid #3d3d3d",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: props.setTheme === "#fff" ? "black" : "white" }}
        >
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} setTheme={props.setTheme} />
      </Box>
    </Stack>
  );
};

export default Feed;
