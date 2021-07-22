import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Van mis vistas que se mostraran
import { Clients, InfoProfile } from './app/views/index.js';
import Calendar from './app/components/Calendar/Calendar';
import Inventory from './app/views/inventory/inventory';
import CreatePetProfile from './app/components/CreatePetProfile/CreatePetProfile'
import HomeDashboard from './app/views/home-dashboard/HomeDashboard.js';
import { CoverClientCreated, CoverDateCreated } from './app/components/index.js';

const SubRoutes = () =>  (
    <Switch>
        <Route  path="/dashboard/clients" component={Clients} />
        <Route  path="/dashboard/home" component={HomeDashboard} />
        <Route  path="/dashboard/clients/update-client" component={()=><h1>En esta web se edita el client</h1>} />
        <Route  path='/dashboard/create-client' component={CreatePetProfile}/>
        <Route  path="/dashboard/inventory" component={Inventory} />
        <Route  path="/dashboard/calendar" component={Calendar} />
        <Route  path="/dashboard/my-profile" component={InfoProfile} />
        <Route path="/dashboard/datecreated" component={CoverDateCreated}/>
        <Route path="/dashboard/clientcreated" component={CoverClientCreated}/>
    </Switch>
)

export default SubRoutes