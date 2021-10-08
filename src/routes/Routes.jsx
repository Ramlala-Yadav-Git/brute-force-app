import React from "react";
import {Switch,Route} from "react-router-dom"
import { LandingPage } from "../components/LandingPage/LandingPage";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </>
  );
}
