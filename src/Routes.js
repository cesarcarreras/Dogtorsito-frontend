import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Importar las vistas
import {Home, Auth} from './app/views';
import Dashboard from './app/views/dashboard/Dashboard';
<<<<<<< HEAD
import { Calendar, CreatePetProfile } from './app/components';

import InfoProfile from './app/views/petsProfile/infoprofile';
=======
>>>>>>> a640573ef6609c9c9f909f7b99551c710f1a4184

const Routes = () =>  (
    <Switch>
        {/* EEl lado off */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
<<<<<<< HEAD
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path='/petsprofile/create' component={CreatePetProfile}/>
        <Route exact path='/petsprofile/' component={InfoProfile}/>
        
=======
>>>>>>> a640573ef6609c9c9f909f7b99551c710f1a4184

        <Route  path="/dashboard" component={Dashboard} />
    </Switch>
)
export default Routes