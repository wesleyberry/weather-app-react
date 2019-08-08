import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Grid from '@material-ui/core/Grid';
import './Stepper.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 300,
      flexGrow: 1,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
}));

    function Stepper({
        humidity,
        visibility,
        high,
        low
        }) {
        const classes = useStyles();
        const theme = useTheme();
        const [activeStep, setActiveStep] = React.useState(0);
        const maxSteps = 3;

        function handleNext() {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }

        function handleBack() {
            setActiveStep(prevActiveStep => prevActiveStep - 1);
        }

        function handleStepChange(step) {
            setActiveStep(step);
        }

        const convertKToF = someTemperature => {
            return ((9/5) * (someTemperature - 273) + 32).toFixed(1);
        };

        const options = [
            { 
                label: "Humidity",
                stats: [humidity] 
            },
            { 
                label: "Visibility",
                stats: [visibility]
            },
            {
                label: "Highs and Lows", 
                stats: [high, low]
            }
        ];

        return (
            <Grid className={classes.root} item xs={6}>
            <Paper square elevation={0} className={classes.header}>
                <Typography>{options[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
            {options.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    [
                    <h3>
                        {step.stats[0]} 
                        {step.label === 'Humidity' ? <span> humid</span> : 
                            (step.label === 'Visibility' ? <span> Visible</span> : <span> F</span>)
                        }
                    </h3>,
                        (step.stats[1] ? 
                    <h3>
                        {convertKToF(low)}<span> F</span>
                    </h3> : null)
                    ]
                    ) : null}
                </div>
            ))}


            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}
                nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    Next
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>
                }
                backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    Back
                </Button>
                }
            />
        </Grid>
    );
}
  
export default Stepper;