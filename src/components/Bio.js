import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Card, CardContent} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  bioContainer: {
    display: "flex",
    marginTop: "8rem",
    border: "2px solid",
  },
}));

export default function Bio() {
  const classes = useStyles();
  return (
    <Card raised className={classes.bioContainer}>
      <CardContent>
        <Typography color="secondary" gutterBottom>
          Bio
        </Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi nostrum illo,
        aliquam, tempore quos, aliquid placeat id quas ducimus sunt! Culpa rem porro, quas
        aut perspiciatis ea quae repellendus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Est nemo asperiores exercitationem labore commodi sapiente
        culpa, pariatur voluptates illo aliquid ratione ab numquam, ut atque alias
        corrupti excepturi ipsum quasi! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quia minus dignissimos mollitia ullam, odio magni optio sint
        quis labore. Aspernatur molestias omnis mollitia impedit odit quis consectetur quo
        quae? Sapiente?
      </CardContent>
    </Card>
  );
}
