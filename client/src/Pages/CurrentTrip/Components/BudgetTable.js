import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  tableDiv: {
    minHeight: 235,
  },
});

export default function BudgetTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableDiv}>
      <Table
        className={classes.table}
        size="small"
        fullWidth
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Categories</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Food
            </TableCell>
            <TableCell align="right">{"$" + props.data.food || `$0`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Activities
            </TableCell>
            <TableCell align="right">{"$" + props.data.activities || `$0`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Flight
            </TableCell>
            <TableCell align="right">{"$" + props.data.flight || `$0`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Hotel
            </TableCell>
            <TableCell align="right">{"$" + props.data.hotel || `$0`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Transportation
            </TableCell>
            <TableCell align="right">
              {"$" + props.data.transportation || `$0`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Misc
            </TableCell>
            <TableCell align="right">{"$" + props.data.misc || `$0`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
