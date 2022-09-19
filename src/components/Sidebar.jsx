import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
// import { Category } from "@mui/icons-material";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
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
            color: "white",
          }}
          key={category.name}
        >
          {/* Sidebar Icons */}
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>

          {/* Sidebar Names */}
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
              marginRight: "15px",
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
