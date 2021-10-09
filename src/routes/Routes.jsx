import React from "react";
import {Switch,Route} from "react-router-dom"
import { LandingPage } from "../components/LandingPage/LandingPage";
import { ListingPage } from "../components/ListingPage/ListingPage";

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/list">
          <ListingPage />
        </Route>
      </Switch>
    </>
  );
}
