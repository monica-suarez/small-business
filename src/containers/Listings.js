import { connect } from "react-redux";
import Listings from "../components/Listings";
import { removeBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.user,
    businesses: state.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBusiness: (idx) => dispatch(removeBusiness(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
