import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    color: 'red'
  }
}));

export default function FullWidthGrid({
    city
    }) {
    const classes = useStyles();

  return (
    <Grid item xs={7}>
      <div className={classes.root}>
          {/* <Paper className={classes.paper}> */}
              <h1 className={classes.header}>{city}</h1>
          {/* </Paper> */}
      </div>
    </Grid>
  );
}