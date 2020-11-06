import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Button, Container } from "@material-ui/core";

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
  console.log(typeof props.user);
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    document.cookie = "loggedIn = true; max-age = 60*1000";
    props.userLogin(userName);
    // props.history.push("/");
    window.location.replace("/");
  };
  return (
    <div className="login-page">
      <Container>
        <form className={classes.root} onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column">
            <TextField
              required
              className={classes.loginInput}
              onChange={handleChange}
              name="userName"
              label="username"
              type="text"
            />
            <TextField
              className={classes.loginInput}
              onChange={handleChange}
              name="password"
              label="password"
              type="password"
            />
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default Login;
