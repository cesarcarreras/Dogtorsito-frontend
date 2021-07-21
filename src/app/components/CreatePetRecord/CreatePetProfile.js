import React ,{Component} from 'react'
import './style.css'

import { TextInput,Button } from '..';
import { Label,Input, BreadcrumbItem } from 'reactstrap';
import {usersListEndpoint} from '../../services/user-ws'

import { profileCreateEndpoint, profileListEndpoint} from '../../services/profile-event-ws';


class PetProfile extends Component {//creamos componente para el formulario
    //const { name, breed,gender,age, weight, picture,owner, owneremail,description } = props;

    state ={
        profile:{
          name:'',
          age:'',
          breed:'',
          gender:'',
          weight:'',
          owneremail:'',
          description:''
        },
        listUser: []
    };


    componentDidMount(){//primero va el componentDidMount
        profileListEndpoint()
        .then(res=>{
          
          this.setState({profiles:res.data.result})
        })
        .catch(error=>{
          console.log(error)
        })
    
        usersListEndpoint()
        .then(res=>{
          
          this.setState({listUser:res.data.result})
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

    handleSubmit=(e)=>{
        //Destructuramos
        
        let {profile} = this.state
        
        e.preventDefault()
        
        profileCreateEndpoint(profile)
        
        .then(res=>{
          console.log(res)
          /*profiles=[...profiles,res.data.result]
          this.setState({profiles})*///modificamos el state con los perfiless
      
      })
      .catch(error =>{
          console.log("error",error.response)
      })
      }


    render(){
    const {profile,listUser} = this.state//Se destructura aqui
    const {handleChange,handleSubmit} = this
    const {match} = this.props

    return (
<div>
<section className="auth-container">
      <div className="container " id="container">
        
        <div className="createApp form-container sign-in-container">
            <form onSubmit={handleSubmit}>
                <h2 className="h1-form">Pet's information</h2>
                <div className="container-fields input-sm ">
                <Label for="exampleSelect">Select client</Label>
                    <Input 
                    type="select" name="_patient" id="exampleSelect" 
                    onChange={handleChange}>
                      <option value={0}>Pick a client</option> 
                      {/* Tengo que validar si el_appointment = 0 , evitar que se cree el evento*/ }
                      {listUser.map((user, index_c) => (
                      <option value={user._id} key={index_c}>
                            {user.name}
                            </option>))}  
                      </Input>
                      <TextInput
                                name='name'
                                placeholder='Pets name'
                                handleChange={handleChange}
                            />
                           <TextInput
                            name='age'
                            placeholder='Pets age'
                            handleChange={handleChange}
                        />
                        <TextInput
                            name='breed'
                            placeholder='Pets breed'
                            handleChange={handleChange}
                        />
                        <TextInput
                            name='gender'
                            placeholder='Pets gender'
                            handleChange={handleChange}
                        />
                    <TextInput
                            name='weight'
                            placeholder='Pets weight'
                            handleChange={handleChange}
                        />

                      <TextInput
                            name='owneremail'
                            placeholder='Owners email'
                            handleChange={handleChange}
                        />
                        <TextInput
                            name='description'
                            placeholder='Pets history'
                            handleChange={handleChange}
                        />

                     </div>
                        <Button text={'Create pets profile'}/>
            </form>

                
        </div>
        
    </div>
    </section>
</div>

        /*<div>
            <div className="card-container"> 
                <img src={picture} alt={name}></img>
                <div>
                    <p><b>Pet's name: </b>{name}</p>
                    <p><b>Pet's age: </b>{age}</p>
                    <p><b>Gender: </b>{gender}</p>
                    <p><b>Breed: </b>{breed}</p>
                    <p><b>Weight: </b>{weight}</p>
                    <p><b>Owner: </b>{owner}</p>
                    <p><b>Owner's email: </b>{owneremail}</p>
                    <p><b>Health report: </b>{description}</p>
                </div>
            </div>
        </div>*/
    )
  }
}

export default PetProfile;