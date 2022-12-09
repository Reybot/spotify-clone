import React from "react";
import { Box, Typography, List } from "@mui/material";
import { useSelector } from "react-redux";
import PlaylistItem from "../components/PlaylistItem";

export default function Library() {
  const { albumList, status } = useSelector((state) => state.playlist);

  return (
    <Box
      px={3}
      sx={{
        display: "flex",
        bgcolor: "background.default",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Typography
        py={3}
        variant="h2"
        fontWeight="bold"
        sx={{ color: "text.primary", fontSize: 30 }}
      >
        Ditt bibliotek
      </Typography>
      <List>
        {status.isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map(() => <PlaylistItem loading={true} />)
          : albumList.map((album) => (
              <PlaylistItem
                key={album.id}
                name={album.name}
                image={album.images[0].url}
                id={album.id}
              />
            ))}
      </List>
    </Box>
  );
}
