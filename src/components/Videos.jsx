import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./exports";

const Videos = ({ videos, direction, setTheme }) => {
  if (!videos?.length) {
    return "Loading...";
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {/* Render Video Details */}
            {item.id.videoId && <VideoCard setTheme={setTheme} video={item} />}
            {item.id.channelId && (
              <ChannelCard channelDetail={item} setTheme={setTheme} />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
