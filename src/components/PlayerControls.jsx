import { Stack, Typography, Slider, IconButton } from "@mui/material";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import React from "react";

const PlayerControls = () => {
  const is_playing = false;
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <SkipPrevious sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: "text.primary" }}>
          {is_playing ? (
            <Pause sx={{ width: 38, height: 38 }} />
          ) : (
            <PlayArrow sx={{ width: 38, height: 38 }} />
          )}
        </IconButton>
        <IconButton size="small" sx={{ color: "text.primary" }}>
          <SkipNext sx={{ width: 28, height: 28 }} />
        </IconButton>
      </Stack>

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "75%" }}
      >
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          1:02
        </Typography>
        <Slider size="medium" />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          3:02
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerControls;
