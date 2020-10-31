import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Marker from "./Marker";

const Map = (props) => {
  const mapStyles = {
    height: "65vh",
    width: "100%",
    marginRight: 2,
    marginTop: 50,
  };

  const defaultCenter = {
    lat: props.lat,
    lng: props.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC8r2IDLhUdDgjAinNaflgkyQTxZO2Ne - k">
      <GoogleMap mapContainerStyle={mapStyles} zoom={19} center={defaultCenter}>
        {
          <Marker
            key={props.business.name}
            position={(props.business.lat, props.business.lng)}
            name="My Marker"
            color="red"
          />
        }
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
