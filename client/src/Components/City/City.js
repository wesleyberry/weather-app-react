import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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
}));

export default function FullWidthGrid({
    city
    }) {
    const classes = useStyles();

  return (
    <Grid item xs={7}>
      <div className={classes.root}>
          <Paper className={classes.paper}>
              {city}
          </Paper>
      </div>
    </Grid>
  );
}