import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Importar las vistas
import {Home, Auth, Clients} from './app/views';
import Dashboard from './app/views/dashboard/Dashboard';
import { Calendar, CreatePetProfile } from './app/components';

import InfoProfile from './app/views/petsProfile/infoprofile';

const Routes = () =>  (
    <Switch>
        {/* EEl lado off */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path='/petsprofile/create' component={CreatePetProfile}/>
        <Route exact path='/petsprofile/' component={InfoProfile}/>
        

        <Route  path="/dashboard" component={Dashboard} />
    </Switch>
)
        
export default Routes