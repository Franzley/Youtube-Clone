import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory, setTheme }) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        borderTop: "1px solid #3d3d3d",
        px: { xs: 0, md: 2 },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
          }}
          key={category.name}
        >
          {/* Sidebar Icons */}
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
            }}
          >
            {category.icon}
          </span>

          {/* Sidebar Names */}
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              color: setTheme === "#fff" && "black",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
