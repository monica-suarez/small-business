import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Listings from "./containers/Listings";
import Login from "./containers/Login";
import AddBusiness from "./containers/AddBusiness";
import ListingInfo from "./containers/ListingInfo";

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
      {!checkAuth() ? (
        <Route exact path="/" component={Listings} />
      ) : (
        <ProtectedRoute exact path="/" component={Listings} />
      )}
      <ProtectedRoute path="/addbusiness" component={AddBusiness} />
      {!checkAuth() ? (
        <Route path="/listinginfo/:id" component={ListingInfo} />
      ) : (
        <ProtectedRoute path="/listinginfo/:id" component={ListingInfo} />
      )}
    </Switch>
  );
};

export default Router;
