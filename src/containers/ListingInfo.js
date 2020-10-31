import { connect } from "react-redux";
import ListingInfo from "../components/ListingInfo";

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
  };
};

export default connect(mapStateToProps)(ListingInfo);
