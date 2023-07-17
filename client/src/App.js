import { useEffect, useState } from "react";
import { Container, AppBar, Grow, Grid, Typography } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./actions/posts";

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

function App() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container maxwidth="lg">
      <MyAppBar position="static" color="inherit">
        <Heading variant="h2" align="center">
          Memories
        </Heading>
        <Image src={memories} alt="memories" height={60} />
      </MyAppBar>
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
