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

const Login = (props) => {
  const classes = useStyles();
  const [userName, setUserName] = React.useState("");
  const handleChange = (evt) => {
    if (evt.target.name === "userName") {
      setUserName(evt.target.value);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn = true; max-age = 60*1000";
    props.userLogin(userName);
    window.location.replace("/");
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box display="flex" flexDirection="column">
        <TextField
          className={classes.loginInput}
          placeholder="username"
          onChange={handleChange}
          userName={userName}
        />
        <TextField className={classes.loginInput} placeholder="password" />
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleClick}
        >
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
