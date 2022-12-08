import React from "react";
import { Grid, Stack, Slider } from "@mui/material";
import { VolumeUp } from "@mui/icons-material";

export default function PlayerVolume() {
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
        <VolumeUp />
        <Slider />
      </Stack>
    </Grid>
  );
}
