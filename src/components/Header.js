import React from "react";
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import headerImage from "../assets/images/mountain.svg";
import theme from "../theme";

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: "flex",
    marginTop: "8rem",
  },

  headerImage: {
    height: "40vmin",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.headerContainer}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h1">Olivier Lagarde</Typography>
        <Typography variant="h4" style={{backgroundColor: theme.palette.secondary.main}}>
          Chanteur et déménageur de luxe
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img src={headerImage} alt="headerImage" className={classes.headerImage} />
      </Grid>
    </Grid>
  );
}
