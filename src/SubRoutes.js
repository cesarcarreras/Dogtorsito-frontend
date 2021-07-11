import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Van mis vistas que see mostraran
import Admin from './app/views/admin/Admin.js';
import { Clients } from './app/views/index.js';

const SubRoutes = () =>  (
    <Switch>

        {/* ADMIN */}
        <Route  path="/dashboard/clients" component={Clients} />
        <Route  path="/dashboard/create-course" component={()=><h1>Estee es el campus</h1>} />
        <Route  path="/dashboard/create-campus" component={Admin} />

        {/*USER  */}
        <Route  path="/dashboard/create-project" component={()=><h1>Estee es el campus</h1>} />
        <Route  path="/" component={()=><h1>Holaa este es / en SSUB -SUBROUTE</h1>} />
    </Switch>
)

export default SubRoutes