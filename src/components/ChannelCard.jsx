import React from "react";
import { Link } from "react-router-dom";
import { Typography, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        boxshadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "300px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              textAlign: "center",
              color: "#fff",
              mb: 2,
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle
              sx={{
                fontSize: 14,
                color: "gray",
                ml: "5px",
              }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
