import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/users" exact component={Users} />
    </Switch>
  );
}
