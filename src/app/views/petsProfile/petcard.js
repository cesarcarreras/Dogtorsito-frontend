import React, {Component} from 'react';

class PetCard extends Component {
    
    

    render (){
        
        let profile=this.props.item
        console.log(this.props)
        return (
            <div>
               
             <img src={profile.picture} alt={profile.name}></img>
                <div>
                    <p><b>Pet's name: </b>{profile.name}</p>
                    <p><b>Pet's age: </b>{profile.age}</p>
                    <p><b>Gender: </b>{profile.gender}</p>
                    <p><b>Breed: </b>{profile.breed}</p>
                    <p><b>Weight: </b>{profile.weight}</p>
                    <p><b>Owner: </b>{profile.name}</p>
                    <p><b>Owner's email: </b>{profile.owneremail}</p>
                    <p><b>Health report: </b>{profile.description}</p>
                </div> 
            </div>
        )
    }
}

export default PetCard;