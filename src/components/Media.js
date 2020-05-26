import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  videoContainer: {
    display: 'flex',
    marginTop: '8rem',
  },
  video: {
    margin: 'auto',
    height: 315,
    width: 560,
  },
}));

export default function Media() {
  const classes = useStyles();
  return (
    <div className={classes.videoContainer}>
      <iframe
        title="portfolio-video"
        className={classes.video}
        src="https://www.youtube.com/embed/Hb4T4pcVCww"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
