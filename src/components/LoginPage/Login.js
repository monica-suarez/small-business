import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40%",
      marginLeft: "30%",
      marginRight: "30%",
      marginTop: 50,
    },
  },
  loginInput: {
    marginTop: 15,
  },
  button: {
    marginTop: 15,
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField className={classes.loginInput} placeholder="username" />
        <TextField className={classes.loginInput} placeholder="password" />
        <Button className={classes.button} variant="contained">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
