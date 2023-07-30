import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
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
    textDecoration: "none",
  });

  const Image = styled("img")({
    marginLeft: "15px",
  });
  const user = null;
  return (
    <MyAppBar position="static" color="inherit">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Heading variant="h2" align="center" component={Link} to="/">
          Memories
        </Heading>
        <Image src={memories} alt="memories" height={60} />
      </div>
      <Toolbar
        sx={{ display: "flex", justifyContent: "flex-end", width: "400px" }}
      >
        {user ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "400px",
            }}
          >
            <Avatar
              sx={{ backgroundColor: "deepPurple[500]" }}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              {user.result.name}
            </Typography>
            <Button variant="contained">Logout</Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        )}
      </Toolbar>
    </MyAppBar>
  );
}

export default Navbar;
