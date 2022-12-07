import React from "react";
import { Box, Grid } from "@mui/material";
import { AccessTimeRounded } from "@mui/icons-material";
import SongRow from "./SongRow";

const SongTable = ({ songs, loading }) => {
  console.log(songs);
  return (
    <Box p={{ xs: 3, md: 4 }} sx={{}}>
      <Grid
        container
        px={2}
        py={2}
        sx={{ fontSize: 14, color: "text.secondary" }}
      >
        <Grid
          item
          sx={{
            width: 35,
            display: "flex",
            alignItems: "center",
          }}
        >
          #
        </Grid>
        <Grid
          item
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          Title
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,
          }}
        >
          Album
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <AccessTimeRounded sx={{ width: 20, height: 20 }} />
        </Grid>
      </Grid>
      {loading
        ? [1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return <SongRow loading={true} />;
          })
        : songs.map(({ track }, index) => {
            console.log(track);
            return (
              <SongRow
                title={track.name}
                artist={track.artists[0].name}
                image={track.album.images[0]?.url}
                position={index + 1}
                album={track.album.name}
                seconds={track.duration_ms / 1000}
              />
            );
          })}
    </Box>
  );
};

export default SongTable;
