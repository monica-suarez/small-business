import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Button } from "@material-ui/core";
import Geocode from "react-geocode";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

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
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [lng, setLng] = React.useState("");
  const [newBusiness, setNewBusiness] = React.useState(null);
  const addNewBusiness = {
    id: props.business.length + 1,
    name: name,
    description: description,
    address: address,
    hours: hours,
    lat: lat,
    lng: lng,
  };

  Geocode.setApiKey("AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k");

  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      setLat(lat);
      setLng(lng);
    },
    (error) => {
      console.error(error);
    }
  );

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "address") {
      setAddress(e.target.value);
    }
    if (e.target.name === "hours") {
      setHours(e.target.value);
    }
    if (e.target.name === "description") {
      setDescription(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBusiness(addNewBusiness);
  };

  const mapStyles = {
    height: "60vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: lat,
    lng: lng,
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
        <LoadScript googleMapsApiKey="AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker
              //   key={props.business.id}
              position={{
                lat: lat,
                lng: lng,
              }}
              onClick={() => {
                setNewBusiness(newBusiness);
              }}
            />
          </GoogleMap>
        </LoadScript>
      </Box>
    </Box>
  );
};

export default AddBusiness;
