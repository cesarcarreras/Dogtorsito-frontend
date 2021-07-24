import React, {Component} from 'react';
import { ProfileCard } from '../../components';
import { profileListEndpoint } from '../../services/profile-event-ws';


class Profile extends Component{
    state={
        user: JSON.parse(localStorage.getItem("user")) || {},
        profile: JSON.parse(localStorage.getItem("profile")) || {},
    };

    componentDidMount(){
        profileListEndpoint()
        .then(res=>{
            console.log(res)
          this.setState({profile:res.data.result})
        })
        .catch(error=>{
          console.log(error)
        })
      }

    render(){
        const {user} = this.state
        const {profile} = this.state
        console.log("Que nos regresa el profile ==>>",profile)
        return(
            <section>
            <ProfileCard
               user={user}
               profile={profile}
            />
           </section>
        )
    }
}

export default Profile;