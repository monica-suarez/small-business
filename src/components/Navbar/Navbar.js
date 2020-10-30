import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { checkAuth } from "../../Router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar className="toolbar">
          <Typography variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          {checkAuth ? (
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link to="/">Listings</Link>
              </li>
              <li className="navbar-item">
                <Link to="/AddBusiness">Add</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login">LOGOUT</Link>
              </li>
            </ul>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
