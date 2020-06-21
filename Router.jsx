import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Subjects from "./Subjects";
import Participants from "./Participants";
import Navbar from "./Navbar";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter basename="/ta-app">
    <Navbar />  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/subjects" component={Subjects} />
      <Route path="/participants/:subjectid" component={Participants} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;