import React from "react";
import styled from "@emotion/styled";
import { AppBar, Typography } from "@mui/material";
import memories from "../../images/memories.png";

function Navbar() {
  const MyAppBar = styled(AppBar)({
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  });

  const Heading = styled(Typography)({
    color: "rgba(0,183,255, 1)",
  });

  const Image = styled("img")({
    marginLeft: "15px",
  });
  return (
    <MyAppBar position="static" color="inherit">
      <Heading variant="h2" align="center">
        Memories
      </Heading>
      <Image src={memories} alt="memories" height={60} />
    </MyAppBar>
  );
}

export default Navbar;
