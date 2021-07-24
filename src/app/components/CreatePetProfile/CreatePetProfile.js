import React ,{Component} from 'react'
import './style.css'

import { TextInput,Button } from '..';
import { Label, Input } from 'reactstrap';
import {usersListEndpoint} from '../../services/user-ws'

import { profileCreateEndpoint, profileListEndpoint} from '../../services/profile-event-ws';


class CreatePetProfile extends Component {//creamos componente para el formulario
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
        const {history} = this.props
        let {profile} = this.state

        e.preventDefault()

        profileCreateEndpoint(profile)
        .then(res=>{
          console.log(res)
          history.push('/dashboard/clientcreated')
         })
         .catch(error =>{
          console.log("error", error.response)
          })
      }


    render(){
    const {listUser} = this.state//Se destructura aqui
    const {handleChange,handleSubmit} = this

    return (
<div>
<section className="auth-container">
      <div className="card " id="container">
        <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
                <h2 className="h1-form">Informacion de la mascota</h2>
                <div className="container-fields input-sm ">

                    <Input
                    type="select" name="_patient" id="exampleSelect"
                    onChange={handleChange}>
                      <option value={0}>Escoge un cliente</option>
                      {/* Tengo que validar si el_appointment = 0 , evitar que se cree el evento*/ }
                      {listUser.map((user, index_c) => (
                      <option value={user._id} key={index_c}>
                            {user.name}
                            </option>))}
                      </Input>
                      <TextInput
                            name='name'
                            placeholder='Nombre de la mascota'
                            handleChange={handleChange}
                            />
                           <TextInput
                            name='age'
                            placeholder='Edad de la mascota'
                            handleChange={handleChange}
                        />
                        <TextInput
                            name='breed'
                            placeholder='Raza'
                            handleChange={handleChange}
                        />
                        <TextInput
                            name='gender'
                            placeholder='Genero de la mascota'
                            handleChange={handleChange}
                        />
                    <TextInput
                            name='weight'
                            placeholder='Peso'
                            handleChange={handleChange}
                        />
                        <TextInput
                            name='owneremail'
                            placeholder='E-mail del propietario'
                            handleChange={handleChange}
                        />
                        <TextInput
                            name='description'
                            placeholder='Historial de la mascota'
                            handleChange={handleChange}
                        />
                     </div>
                     <Button text={'Crear perfil de mascota'}/>
            </form>
        </div>
    </div>
    </section>
</div>
    )
  }
}

export default CreatePetProfile;