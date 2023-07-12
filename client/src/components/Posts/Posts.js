import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

// mainContainer: {

// },
// smMargin: {
//   margin: theme.spacing(1),
// },
// actionDiv: {
//   textAlign: 'center',
// },

function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          sx={{ display: "flex", alignItems: "center" }}
          alignItems="stretch"
          spacing={3}
        >
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Posts;
