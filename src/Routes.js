import React from 'react';
import {Switch, Route} from 'react-router-dom';
//Importar las vistas
import {Home, Auth} from './app/views';
import Dashboard from './app/views/dashboard/Dashboard';

const Routes = () =>  (
    <Switch>
        {/* EEl lado off */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />

        <Route  path="/dashboard" component={Dashboard} />
    </Switch>
)

export default Routes