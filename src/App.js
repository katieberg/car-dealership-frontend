import React from 'react';
import './App.css';
import Page2 from './Page2';
import LoginPage from './Components/Layout/LoginPage'
import Nav from "./Components/Layout/Nav";//move to App
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './Components/Layout/Footer';
import LandingPage from './Components/Layout/LandingPage';
import LocationLanding from './Components/Layout/LocationLanding';
import CarPage from './Components/Layout/IndividualCar';


function App() {
  var state = { loggedIn: true };
  return (
    <BrowserRouter>{/* <!--Bring this whole situation to app */}
      {/* <!--Each route is defined with Route--> */}
      <>
        <Nav />
        < Switch >
          <Route exact path="/" component={LandingPage} />

          <Route path="/login" component={LoginPage} />
          <Route path="/car/:car_id" component={CarPage} />
          <Route path="/:location_id" component={LocationLanding} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
