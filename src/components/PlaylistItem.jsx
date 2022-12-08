import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Skeleton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PlaylistItem({ name, image, id, loading }) {
  const navigate = useNavigate();

  if (loading)
    return (
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar sx={{ marginRight: "16px" }}>
            <Skeleton variant="rectangular" width={60} height={60} />
          </ListItemAvatar>
          <Skeleton variant="text" width={150} height={20} />
        </ListItemButton>
      </ListItem>
    );

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          navigate(`/playlist/${id}`);
        }}
      >
        <ListItemAvatar>
          <Avatar src={image} variant="square" width={60} height={60} />
        </ListItemAvatar>
        <ListItemText primary={name} sx={{ color: "text.primary" }} />
      </ListItemButton>
    </ListItem>
  );
}
