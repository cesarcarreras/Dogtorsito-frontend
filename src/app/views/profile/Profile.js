import React, {Component} from 'react';
import ClientInfo from '../../../clients.json'
import { UserList } from '../../components';


class Profile extends Component{
  state = {
     client_list: ClientInfo
  }
    render(){
        const {client_list} = this.state
        return(
            <section>
               <UserList clients={client_list}/>
           </section>
        )
    }
}

export default Profile;