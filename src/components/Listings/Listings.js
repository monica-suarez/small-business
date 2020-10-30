import React from "react";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { DeleteIcon } from "@material-ui/icons";
import { checkAuth } from "../../Router";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 50,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
}));

const Listings = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {checkAuth() && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, idx) => (
            <TableRow key={idx}></TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
