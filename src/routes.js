import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Destinations from './pages/Destinations';
import HomeProfile from './pages/HomeProfile';
import ContactUs from './pages/ContactUs';
import Profile from './pages/Profile';
import ChangeProfile from './pages/ChangeProfile';
import AirplaneSeats from './pages/AirplaneSeats';
import CreditCard from './pages/CreditCard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/destinations" exact component={Destinations} />
        <Route path="/homeprofile" exact component={HomeProfile} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/changeprofile" exact component={ChangeProfile} />
        <Route path="/airplane" exact component={AirplaneSeats} />
        <Route path="/payment" exact component={CreditCard} />
      </Switch>
    </BrowserRouter>
  );
}