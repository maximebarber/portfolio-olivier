import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import headerImage from '../assets/images/profile.jpeg';

const useStyles = makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    marginTop: '8rem',
    textAlign: 'center',
  },
  h1: {
    paddingBottom: '2rem',
    fontWeight: '800',
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    display: 'flex',
  },
  headerImage: {
    height: '430px',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.headerContainer}>
      <Grid className={classes.headerTextContainer} item xs={12} sm={6}>
        <Typography className={classes.h1} variant="h1" xs={12}>
          I&apos;m a singer and a removal man
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          src={headerImage}
          alt="headerImage"
          className={classes.headerImage}
        />
      </Grid>
    </Grid>
  );
}
