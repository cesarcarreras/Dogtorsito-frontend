import React from 'react'
import './style.css'

function PetProfile(props) {
    const { name,race, breed, weight, birth, picture } = props;

    return (
        <div>
            <div className="card-container"> 
                <img src={picture} alt={name}></img>
                <div>
                    <p><b>Pet's name: </b>{name}</p>
                    <p><b>Race: </b>{race}</p>
                    <p><b>Breed: </b>{breed}</p>
                    <p><b>Weight: </b>{weight}</p>
                    <p><b>Birth: </b>{birth.toString()}</p>
                </div>
            </div>
        </div>
    )
}

export default PetProfile;