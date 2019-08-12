import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const timestamp = require("unix-timestamp");

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    overflowX: 'none',
  }
}));

const convertDateMorning = someDate => {
    someDate = JSON.stringify(timestamp.toDate(someDate));
    someDate = someDate.slice(12, 17);
    someDate = someDate.split(":");
    someDate = (parseFloat(someDate[0]) - 5) + someDate[1];
    return someDate;
};

const convertDateEvening = someDate => {
    someDate = JSON.stringify(timestamp.toDate(someDate));
    someDate = someDate.slice(12, 17);
    someDate = someDate.split(":");
    someDate[0] = 0;
    if(someDate[0] == 0) {
        someDate[0] = 19;
    }else if(someDate[0] == 1) {
        someDate[0] = 20;
    } else if(someDate[0] == 2) {
        someDate[0] = 21;
    } else if(someDate[0] == 3) {
        someDate[0] = 22;
    } else if(someDate[0] == 4) {
        someDate[0] = 23;
    } else if(someDate[0] == 5) {
        someDate[0] = 24;
    }
    someDate = (parseFloat(someDate[0]) - 5) + someDate[1];
    return someDate;
};

export default function CustomizedTables({
    sunrise,
    sunset
    }) {
  const classes = useStyles();

  var newSunrise;
  var newSunset;
  if(sunrise && sunset) {
    var newSunrise = convertDateMorning(sunrise);
    var newSunset = convertDateEvening(sunset);
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Sunrise</StyledTableCell>
            <StyledTableCell>Sunset</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow key={sunrise}>
              <StyledTableCell component="th" scope="row">
                {newSunrise}
              </StyledTableCell>
              <StyledTableCell>{newSunset}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}