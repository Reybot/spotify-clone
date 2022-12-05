import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidenav from "./Sidenav";
import { Box } from "@mui/material";
import Home from "../pages/Home";

export default function Dashboard() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        "flex-direction": "column",
      }}
    >
      <Box sx={{ flex: 1, overflowY: "auto", display: "flex" }}>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<h1>Library</h1>} />
          <Route path="/playlist/:id" element={<h1>Playlist</h1>} />
        </Routes>
      </Box>
    </Box>
  );
}
