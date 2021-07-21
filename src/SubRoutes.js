import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Van mis vistas que se mostraran
import { Clients, Profile } from './app/views/index.js';
import Calendar from './app/components/Calendar/Calendar';
import Inventory from './app/views/inventory/inventory';
import CreatePetProfile from './app/components/CreatePetProfile/CreatePetProfile'

const SubRoutes = () =>  (
    <Switch>
        {/* ADMIN */}
        <Route  path="/dashboard/clients" component={Clients} />
        <Route  path="/dashboard/clients/update-client" component={()=><h1>En esta web se edita el client</h1>} />
        <Route  path='/dashboard/create-client' component={CreatePetProfile}/>
        <Route  path="/dashboard/inventory" component={Inventory} />
        <Route  path="/dashboard/calendar" component={Calendar} />

        {/*USER  */}
        <Route  path="/dashboard/my-profile" component={Profile} />

    </Switch>
)

export default SubRoutes