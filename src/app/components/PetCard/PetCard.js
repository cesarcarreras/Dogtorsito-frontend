
import React, {Component} from 'react';

class PetCard extends Component {

    render (){

        let profile=this.props.item
        console.log(this.props)
        return (
            <div>
             <img src={profile.picture} alt={profile.name}></img>
                <div>
                    <p><b>Nombre de la mascota: </b>{profile.name}</p>
                    <p><b>Edad: </b>{profile.age}</p>
                    <p><b>Genero: </b>{profile.gender}</p>
                    <p><b>Raza: </b>{profile.breed}</p>
                    <p><b>Peso: </b>{profile.weight}</p>
                    <p><b>e-mail del propietario: </b>{profile.owneremail}</p>
                    <p><b>Reporte medico: </b>{profile.description}</p>
                </div>
            </div>
        )
    }
}

export default PetCard;