import React, {Component} from 'react';
import SubRoutes from '../../../SubRoutes';
import { ClientList, SideBar } from '../../components';
import ClientInfo from '../../../clients.json'
import Routes from '../../../Routes';

class Clients extends Component{
  state = {
     client_list: ClientInfo
  }
    render(){
        const {client_list} = this.state
        return(
            <section>
      <div className="navbar navbar-dark bg-primary mb-3">
        </div>
         <div className="container">
          <div className="row">
           <div className="col-5 extra">
            <div className="list-group">
            <ClientList clients={client_list}/>
          </div>
         </div>
         <SubRoutes/>
         <Routes/>i
        </div>
       </div>
            <SideBar/>
         </section>
        )
    }
}

export default Clients;