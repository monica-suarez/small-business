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
  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn = true; max-age = 60*1000";
    props.userLogin(userName);
    // props.history.push("/");
    window.location.replace("/");
  };
  return (
    <form
      className={classes.root}
      onSubmit={handleClick}
      noValidate
      autoComplete="off"
    >
      <Box display="flex" flexDirection="column">
        <TextField
          className={classes.loginInput}
          placeholder="username"
          onChange={handleChange}
          name="userName"
          type="text"
        />
        <TextField
          className={classes.loginInput}
          placeholder="password"
          type="password"
          name="password"
        />
        <Button className={classes.button} type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default Login;
