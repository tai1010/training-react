import React from "react";
import Button from "@mui/material/Button";
import { Avatar, Box, Container, ThemeProvider } from "@mui/material";

function index() {
  return (
    <ThemeProvider>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></Box>
      </Container>
    </ThemeProvider>
  );
}

export default index;
