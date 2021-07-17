import React, {Component} from 'react';
import { ClientList } from '../../components';
import ClientInfo from '../../../clients.json'


class Clients extends Component{
  state = {
     client_list: ClientInfo
  }
    render(){
        const {client_list} = this.state
        return(
            <section>
               <ClientList clients={client_list}/>
           </section>
        )
    }
}

export default Clients;