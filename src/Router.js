import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Listings from "./containers/Listings";
import Login from "./containers/Login";
import AddBusiness from "./containers/AddBusiness";
import ListingInfo from "./containers/ListingInfo";
import cookie from "cookie";

export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Listings} />
      <ProtectedRoute path="/addbusiness" component={AddBusiness} />
      <Route path="/listinginfo/:id" component={ListingInfo} />
    </Switch>
  );
};

export default Router;
