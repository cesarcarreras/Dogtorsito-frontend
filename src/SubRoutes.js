import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Van mis vistas que se mostraran
import { Clients } from './app/views/index.js';
import Calendar from './app/components/Calendar/Calendar';
import PetsProfile from './app/views/petProfile/PetProfile';
import Inventory from './app/views/inventory/inventory';

const SubRoutes = () =>  (
    <Switch>
        {/* ADMIN */}
        <Route  path="/dashboard/clients" component={Clients} />
        <Route  path="/dashboard/clients/update-client" component={()=><h1>En esta web se edita el client</h1>} />
        <Route  path="/dashboard/appointments" component={()=><h1>Aquí podremos ver las citas</h1>} />
        <Route  path="/dashboard/inventory" component={Inventory} />
        <Route  path="/dashboard/calendar" component={Calendar} />
        <Route  path='/dashboard/my-profile' component={PetsProfile}/>

        {/*USER  */}
        <Route  path="/dashboard/my-profile" component={Calendar} />
        <Route  path="/dashboard" component={()=><h1>Esta es la página principal del usuario</h1>} />
    </Switch>
)

export default SubRoutes