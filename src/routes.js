import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <Route path="/destinations" exact component={Destinations} />
        <Route path="/" exact component={HomeProfile} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/changeprofile" exact component={ChangeProfile} />
        <Route path="/airplane" exact component={AirplaneSeats} />
        <Route path="/payment" exact component={CreditCard} />
      </Switch>
    </BrowserRouter>
  );
}