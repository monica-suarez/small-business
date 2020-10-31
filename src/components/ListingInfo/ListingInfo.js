import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Map from "../Map";

const useStyles = makeStyles((theme) => ({
  body: {
    width: "60%",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: 50,
  },
}));

const ListingInfo = (props) => {
  const classes = useStyles();
  const id = props.match.params.id;
  const business = props.businesses.find((b) => b.id === Number(id));
  return (
    <Box display="flex" flexDirection="column" className={classes.body}>
      <h3>{business.name}</h3>
      <p>{business.address}</p>
      <p>{business.hours}</p>
      <p>{business.description}</p>
      <div>
        <Map lat={business.lat} lng={business.lng} business={business} />
      </div>
    </Box>
  );
};

export default ListingInfo;
