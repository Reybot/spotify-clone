import { Stack, Typography, Slider, IconButton } from "@mui/material";
import { PlayArrow, SkipNext, SkipPrevious, Pause } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { formatTime } from "../utils/formatTime";

const PlayerControls = ({ player, duration, progress, is_paused }) => {
  const [currentProgress, setCurrentProgress] = useState(progress);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!is_paused && player) {
        setCurrentProgress((c) => c + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [is_paused, player]);

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
        <IconButton
          onClick={() => {
            setCurrentProgress(0);
            player.previousTrack();
          }}
          size="small"
          sx={{ color: "text.primary" }}
        >
          <SkipPrevious sx={{ width: 28, height: 28 }} />
        </IconButton>
        <IconButton
          onClick={() => {
            player.togglePlay();
          }}
          size="small"
          sx={{ color: "text.primary" }}
        >
          {is_paused ? (
            <PlayArrow sx={{ width: 38, height: 38 }} />
          ) : (
            <Pause sx={{ width: 38, height: 38 }} />
          )}
        </IconButton>
        <IconButton
          onClick={() => {
            setCurrentProgress(0);
            player.nextTrack();
          }}
          size="small"
          sx={{ color: "text.primary" }}
        >
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
          {formatTime(currentProgress)}
        </Typography>
        <Slider
          size="medium"
          min={0}
          max={duration}
          value={currentProgress}
          onChange={(_, value) => {
            setCurrentProgress(value);
          }}
          onChangeCommitted={(_, value) => {
            player.seek(value * 1000);
          }}
        />
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: 12 }}
        >
          {formatTime(duration)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PlayerControls;
