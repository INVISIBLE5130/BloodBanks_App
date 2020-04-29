import React, { Component } from 'react';
import './App.css';

import HomePage from './components/pages/HomePage';
import AnimalsPage from './components/pages/AnimalsPage';
import BloodBanksPage from './components/pages/BloodBanksPage';
import BloodRequestsPage from './components/pages/BloodRequestsPage';
import ClinicsPage from './components/pages/ClinicsPage';
import DonationsPage from './components/pages/DonationsPage';
import MedicalChecksPage from './components/pages/MedicalChecksPage';
import StaffPage from './components/pages/StaffPage';
import UsersPage from './components/pages/UsersPage';

import { MoreHoriz, AddBox, Delete, Edit, Build } from '@material-ui/icons';

import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends Component {

  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Route exact path={"/"} component={HomePage}/>
            <Route exact path={"/animals"} component={AnimalsPage}/>
            <Route exact path={"/bloodBanks"} component={BloodBanksPage}/>
            <Route exact path={"/bloodRequests"} component={BloodRequestsPage}/>
            <Route exact path={"/clinics"} component={ClinicsPage}/>
            <Route exact path={"/donations"} component={DonationsPage}/>
            <Route exact path={"/medicalChecks"} component={MedicalChecksPage}/>
            <Route exact path={"/staff"} component={StaffPage}/>
            <Route exact path={"/users"} component={UsersPage}/>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
