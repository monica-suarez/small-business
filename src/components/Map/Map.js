import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = (props) => {
  const [selectedBusiness, setSelectedBusiness] = React.useState(null);
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
  const API_KEY = process.env.REACT_APP_GEOCODE_API_KEY;

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={19} center={defaultCenter}>
        <Marker
          key={props.business.id}
          position={{
            lat: props.business.lat,
            lng: props.business.lng,
          }}
          onClick={() => {
            setSelectedBusiness(selectedBusiness);
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
