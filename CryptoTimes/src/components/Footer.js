import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Footer = () => (
  <Box component="footer" sx={{ py: 3, backgroundColor: "#f5f5f5" }}>
    <Container maxWidth="md">
      <Typography variant="body1">
        © 2024 Crypto Degen Visuals. All rights reserved.
      </Typography>
    </Container>
  </Box>
);

export default Footer;
