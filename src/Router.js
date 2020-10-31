import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Listings from "./containers/Listings";
import Login from "./components/LoginPage";
import AddBusiness from "./components/AddBusiness";
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
        checkAuth() ? <Component {...props} /> : <Redirect to="./login" />
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
