import React, { useState } from "react";
import { Grid, Stack, Slider } from "@mui/material";
import { VolumeUp, VolumeDown, VolumeOff } from "@mui/icons-material";

export default function PlayerVolume({ player }) {
  const [volume, setVolume] = useState(50);
  return (
    <Grid
      item
      xs={3}
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        sx={{ width: 150, color: "text.secondary" }}
      >
        {volume === 0 ? (
          <VolumeOff />
        ) : volume < 50 ? (
          <VolumeDown />
        ) : (
          <VolumeUp />
        )}

        <Slider
          min={0}
          max={100}
          step={1}
          value={volume}
          onChange={(_, value) => {
            setVolume(value);
          }}
          onChangeCommitted={(_, value) => {
            player.setVolume(value / 100);
          }}
        />
      </Stack>
    </Grid>
  );
}
