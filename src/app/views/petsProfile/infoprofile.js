import React, {Component} from 'react';

import {profileListEndpoint} from '../../services/profile-event-ws';
import PetCard from '../../components/PetCard/PetCard';
import './style.css';


class InfoProfile extends Component  {

    state = {
      profiles:undefined,
    }

    componentDidMount(){
      profileListEndpoint()
      .then(res=>{
          console.log(res)
        this.setState({profiles:res.data.result})
      })
      .catch(error=>{
        console.log(error)
      })
    }

    handleChange=(e)=>{
      //Destructuramos
      let {profile} = this.state
      const {name, value} = e.target
      profile[name]= value
      this.setState({ profile })
  }

    render(){
const {profiles} = this.state
console.log("perfiles", profiles)

return (
    <div className="">
    <div className="container">
					<tbody>
                <div>
                  <h1>Pet's profile</h1>
                </div>
          <div>
            <div className="card-container">
                { profiles === undefined ? <span>No hay perfiles</span> : profiles.map (item =>{
                 return <PetCard key={item.id} item={item}/>
                })}
            </div>
            <a href="/dashboard/create-client"> Crear Cliente</a>
        </div>
					</tbody>
</div>
</div>
    )
  }
}

export default InfoProfile ;