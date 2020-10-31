import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { checkAuth } from "../../Router";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 50,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  title: {
    color: "gray",
  },
  delete: {
    color: "tomato",
  },
}));

const Listings = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>Name</TableCell>
            <TableCell className={classes.title}>Description</TableCell>
            <TableCell className={classes.title}>Hours</TableCell>
            <TableCell className={classes.title}>Address</TableCell>
            {checkAuth() && (
              <TableCell className={classes.title}>Delete</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Link
                  to={`/listinginfo/${business.id}`}
                  className="listing-link"
                >
                  {business["name"]}
                </Link>
              </TableCell>
              <TableCell>{business["description"]}</TableCell>
              <TableCell>{business["hours"]}</TableCell>
              <TableCell>{business["address"]}</TableCell>
              {checkAuth() && (
                <TableCell>
                  <DeleteIcon
                    className={classes.delete}
                    onClick={(index) => props.removeBusiness(idx, index)}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
