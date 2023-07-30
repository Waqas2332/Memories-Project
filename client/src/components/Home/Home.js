import React from "react";
import { useEffect, useState } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { Grow, Grid, Container } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../actions/posts";

function Home() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: {
              md: "row",
              sm: "column-reverse",
              xs: "column-reverse",
            },
          }}
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item sm={12} md={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item sm={12} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
