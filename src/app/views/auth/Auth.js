import React,  {Component} from 'react';
import './styles.css'
import logo from '../../assets/images/logo.png'
import { TextInput,Button } from '../../components';
import {Link} from 'react-router-dom';
import {loginEndpoint,signupEndpoint} from '../../services/auth-ws'
export default class Auth  extends Component{

    state={
        user:{
            //email:''
            //password:''
        }
    }

    handleChange=(e)=>{
       let  {user} = this.state
        const {name,value} = e.target
        //para editar el state this.setState({})
        //a)
        // this.setState({  user:{ ...user,[name]:value }      })
        //b)
        user[name]=value
        this.setState({ user })
    }
    handleSubmit=(e)=>{
        const {match,history} = this.props
        const {user} = this.state
        e.preventDefault()
               console.log(user)
        const alreadyLoggedIn = () => match.path === "/signup" ? signupEndpoint(user) : loginEndpoint(user);
        alreadyLoggedIn()
            .then(res=>{

                localStorage.setItem( "user",JSON.stringify(res.data.result) )
                history.push('/main')
            })
            .catch(error =>{
                console.log("error",error.response)
            })

    }
    render(){
        //desctruramos los para tenerlo mass limpio
        //state
        const {user} = this.state
        //this
        const {handleChange,handleSubmit} = this
        //props
        const {match} = this.props
        return(
            <section className="auth-container">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <img src={logo} width='20%' alt= "Logo"/>


                        {match.path === "/signup" &&
                                <TextInput
                                name='name'
                                textLabel= 'Nombre'
                                placeholder='Juan Perez'
                                handleChange={handleChange}
                            />

                        }
                        <TextInput
                            name='email'
                            textLabel= 'Correo electronico'
                            placeholder='mi@correo.com'
                            handleChange={handleChange}
                        />

                        <TextInput
                            name='password'
                            textLabel= 'Contraseña'
                            type='password'
                            placeholder='······'
                            handleChange={handleChange}
                        />
                         {match.path === "/signup" &&
                                <TextInput
                                name='confirmPassword'
                                textLabel= 'Confirma  tu contraseña'
                                placeholder='······'
                                handleChange={handleChange}
                            />
                        }

                        {match.path === "/signup" &&
                                <TextInput
                                name='pet'
                                textLabel= '¿Qué tipo de mascota tienes?'
                                placeholder='Perro, Gato, Hurón, Dragón, etc...'
                                handleChange={handleChange}
                            />
                        }

                        {match.path === "/signup" &&
                                <TextInput
                                name='breed'
                                textLabel= '¿Qué raza es?'
                                placeholder='Labrador, Siamés, Egicipcio etc...'
                                handleChange={handleChange}
                            />
                        }

                        <Button
                            text='Entrar'
                        />
                    </form>
                    <span> {`${
                        match.path !== '/signup' ? "Aun no" : 'Ya' 
                    } tienes cuenta? |`} 
                        <Link to={match.path !== "/signup" ? "/signup" :"/login" }>Dale aqui</Link> 
                    </span>
                </div>
            </section>
        )
    }
};