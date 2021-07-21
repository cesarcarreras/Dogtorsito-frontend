import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Importar las vistas
import {Home, Auth, Clients} from './app/views';
import Dashboard from './app/views/dashboard/Dashboard';
import { Calendar } from './app/components';
import PetProfile from './app/components/PetRecord/PetProfile';
import PetsProfile from './app/views/petsProfile/profile';

const Routes = () =>  (
    <Switch>
        {/* EEl lado off */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path='/petsprofile/create' component={PetProfile}/>
        <Route exact path='/petsprofile/' component={PetsProfile}/>
        <Route exact path='/clients' component={Clients}/>

        <Route  path="/dashboard" component={Dashboard} />
    </Switch>
)
        
export default Routes