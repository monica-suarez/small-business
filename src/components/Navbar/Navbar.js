import React from "react";
import { AppBar, Toolbar, Typography, Paper, Slide } from "@material-ui/core";
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
  welcome: {
    backgroundColor: "lightgray",
    color: "black",
    height: 24,
    width: "99%",
    paddingLeft: "1%",
    fontSize: 18,
    fontWeight: "100",
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar className="toolbar">
          <Typography variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">Listing</Link>
            </li>
            {checkAuth() && (
              <li className="navbar-item">
                <Link to="/addbusiness">Add</Link>
              </li>
            )}
            {checkAuth() ? (
              <li
                className="navbar-item"
                onClick={() => {
                  document.cookie = "loggedIn=";
                  window.location.replace("/login");
                }}
              >
                <Link to="/login">Logout</Link>
              </li>
            ) : (
              <li className="navbar-item">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </Toolbar>
      </AppBar>
      {checkAuth() ? (
        <Slide direction="down" in={checkAuth()}>
          <Paper
            className={classes.welcome}
          >{`Welcome ${props.userName}!`}</Paper>
        </Slide>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Navbar;
