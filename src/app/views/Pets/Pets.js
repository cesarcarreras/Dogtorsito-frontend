import React, {Component} from 'react';

import {profileListEndpoint} from '../../services/profile-event-ws';
import PetCard from '../../components/PetCard/PetCard';
import './style.css';
class Pets extends Component  {

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
    <div className="container-petprofile">
      <div>
      <a href="/dashboard/create-pet" className="btn-get-started"> Crear Mascota</a>
      </div>
		<tbody>
            <div>
                <div className="pet-profile-cards">
                    { profiles === undefined ? <span>No hay perfiles</span> : profiles.map (item =>{
                    return <PetCard key={item.id} item={item}/>
                    })}
                </div>
            </div>
	</tbody>
</div>
    )
  }
}

export default Pets ;