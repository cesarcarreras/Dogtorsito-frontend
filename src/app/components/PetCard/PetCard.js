import React, {Component} from 'react';
import './styles.css'

class PetCard extends Component {

    render (){
        let profile = this.props.item
        return (
            <section className="cards-clients">
                    <div class="container-client-card">
                        <div class="clients-card">
                            <div class="face face1">
                                <div class="content-cards-clients">
                                       <img src={profile.image} className="profile-pic-cards" alt="Pet Profile Pic"/>
                                </div>
                            </div>
                            <div class="face face2">
                                <div class="content">
                                    <p>{profile.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        )
    }
}

export default PetCard;