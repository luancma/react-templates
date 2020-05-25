import React from "react";
import { Switch } from "react-router-dom";
import Route from "./PrivateRoute";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/posts" exact component={Posts} isPrivate />
      <Route path="/users" exact component={Users} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} isPrivate />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
