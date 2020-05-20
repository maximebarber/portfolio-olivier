import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Card, CardContent, Grid, Paper} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  bioContainer: {
    marginTop: "6rem",
    border: "3px solid",
    padding: "2rem",
  },
}));

export default function Bio() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.bioContainer}>
      <Grid item xs={12} sm={2}>
        <Typography variant="h3">Bio</Typography>
      </Grid>
      <Grid item xs={12} sm={10}>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi nostrum
          illo, aliquam, tempore quos, aliquid placeat id quas ducimus sunt! Culpa rem
          porro, quas aut perspiciatis ea quae repellendus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Est nemo asperiores exercitationem labore commodi
          sapiente culpa, pariatur voluptates illo aliquid ratione ab numquam, ut atque
          alias corrupti excepturi ipsum quasi! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
        </Typography>
      </Grid>
    </Grid>
  );
}
