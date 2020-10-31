import { connect } from "react-redux";
import Map from "../components/Map";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  };
};

export default connect(mapStateToProps)(Map);
