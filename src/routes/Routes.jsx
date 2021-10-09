import React from "react";
import { Switch, Route } from "react-router-dom";
import { BookPage } from "../components/BookPage/BookPage";
import { LandingPage } from "../components/LandingPage/LandingPage";
import { ListingPage } from "../components/ListingPage/ListingPage";
import Search from "../components/Search/Search";
import CreateBook from "../components/CreateBook/CreateBook";
import Login from "../components/Login/Login";

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
        <Route path="/book">
          <BookPage />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/create">
          <CreateBook />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
}
