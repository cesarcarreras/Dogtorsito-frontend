import React from 'react';
import {Switch,Route} from 'react-router-dom';
//Van mis vistas que see mostraran
import Admin from './app/views/admin/Admin.js';
import { Clients } from './app/views/index.js';

const SubRoutes = () =>  (
    <Switch>
        {/* ADMIN */}
        <Route  path="/dashboard/clients" component={Clients} />
        <Route  path="/dashboard/clients/update-client" component={()=><h1>En esta web se edita el client</h1>} />
        <Route  path="/dashboard/appointments" component={()=><h1>Aquí podremos ver las citas</h1>} />
        <Route  path="/dashboard/inventory" component={()=><h1>Aquí podremos ver el inventario</h1>} />

        {/*USER  */}
        <Route  path="/dashboard/my-profile" component={()=><h1>Este será el profile del usuario</h1>} />
        <Route  path="/dashboard" component={()=><h1>Esta es la página principal del usuario</h1>} />
    </Switch>
)

export default SubRoutes