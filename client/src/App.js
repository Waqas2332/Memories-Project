import { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@mui/material";

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/posts";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <Navbar />
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
    </Container>
  );
}

export default App;
