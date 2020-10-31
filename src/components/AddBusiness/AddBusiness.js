import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    marginLeft: "5%",
    marginRight: "5%",
  },
  formContainer: {
    width: "50%",
  },
  input: {
    width: "100%",
  },
  button: {
    width: "50%",
    height: 28,
    marginTop: 15,
  },
  mapContainer: {
    width: "50%",
    height: "auto",
    marginLeft: "3%",
  },
}));

const AddBusiness = (props) => {
  const classes = useStyles();
  const [newBusiness, setNewBusiness] = React.useState(null);
  const handleSubmit = () => () => {
    document.cookie = "loggedIn = true; max-age = 60*1000";
    props.addBusiness(newBusiness);
    setNewBusiness(newBusiness);
  };
  return (
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flexDirection="column"
        className={classes.formContainer}
      >
        <form onSubmit={handleSubmit((b) => setNewBusiness(b))}>
          <TextField className={classes.input} placeholder="Name" />
          <br />
          <TextField className={classes.input} placeholder="Address" />
          <br />
          <TextField
            className={classes.input}
            placeholder="Hours ex. 8AM-9PM"
          />
          <br />
          <TextField className={classes.input} placeholder="Description" />
          <br />
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            type="submit"
            onSubmit={handleSubmit((b) => setNewBusiness(b))}
          >
            Save
          </Button>
        </form>
      </Box>
      <Box
        className={classes.mapContainer}
        display="flex"
        flexDirection="column"
      >
        <iframe title="map" className="map" />
      </Box>
    </Box>
  );
};

export default AddBusiness;
