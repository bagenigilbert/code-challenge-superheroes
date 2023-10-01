import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Home from "./Home";
import HeroPowerForm from "./HeroPowerForm";
import Power from "./Power";
import PowerEditForm from "./PowerEditForm";

const API_BASE_URL = "http://127.0.0.1:5003"; // Your Flask API URL

function App() {
  return (
    <div>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path="/hero_powers/new">
              <HeroPowerForm apiBaseUrl={API_BASE_URL} />
            </Route>
            <Route exact path="/powers/:id/edit">
              <PowerEditForm apiBaseUrl={API_BASE_URL} />
            </Route>
            <Route exact path="/powers/:id">
              <Power apiBaseUrl={API_BASE_URL} />
            </Route>
            <Route exact path="/heroes/:id">
              <Hero apiBaseUrl={API_BASE_URL} />
            </Route>
            <Route exact path="/">
              <Home apiBaseUrl={API_BASE_URL} />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
