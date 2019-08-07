import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Thunderstorm from '../../assets/11d.png';
import Rain from '../../assets/10d.png';
import Drizzle from '../../assets/09d.png';
import Snow from '../../assets/13d.png';
import Else from '../../assets/50d.png';
import Clear from '../../assets/01d.png';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    // minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({
    description,
    icon
    }) {
  const classes = useStyles();
    var Icon;
    if(icon === "Thunderstorm") {
        Icon = Thunderstorm;
    } else if( icon === "Rain") {
        Icon = Rain;
    } else if( icon === "Drizzle") {
        Icon = Drizzle;
    } else if( icon === "Snow") {
        Icon = Snow;
    } else if( icon === "Clear") {
        Icon = Clear;
    } else {
        Icon = Else;
    }
    console.log(Icon);

  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
          <CardContent>
              <Typography className={classes.title}>
              {description}
              </Typography>
              <img src={Icon} alt="An icon of the weather" />
          </CardContent>
      </Card>
    </Grid>
  );
}