import React,  {Component} from 'react';
import './styles.css'
import { TextInput,Button } from '../../components';
import {Link} from 'react-router-dom';
import {loginEndpoint,signupEndpoint} from '../../services/auth-ws';
export default class Auth  extends Component{

    state={
        user:{}
    };

    handleChange=(e)=>{
        //Destructuramos
        let {user} = this.state
        const {name, value} = e.target
        user[name]= value
        this.setState({ user })
    }
    handleSubmit=(e)=>{
        const {match,history} = this.props
        const {user} = this.state
        e.preventDefault()
        console.log("log de user", user)
        const alreadyLoggedIn = () => match.path === "/signup" ? signupEndpoint(user) : loginEndpoint(user);
        alreadyLoggedIn()
            .then(res=>{
                localStorage.setItem( "user",JSON.stringify(res.data.result) )
                history.push('/dashboard')
            })
            .catch(error =>{
                console.log("error",error.response)
            })
    }
    render(){
        const {handleChange,handleSubmit} = this
        const {match} = this.props
        return(
                <section className="auth-container">
                    <div className="container" id="container">
                        <div className="form-container sign-in-container">
                        <form onSubmit={handleSubmit}>
                            {match.path === "/login" && <h1 className="h1-form">Ingresa</h1>}
                            {match.path === "/signup" && <h1 className="h1-form">Registrate</h1>}
                                <div>
                                    {match.path === "/signup" &&
                                                <TextInput
                                                name='name'
                                                placeholder='Nombre'
                                                handleChange={handleChange}
                                            />
                                        }
                                        <TextInput
                                            name='email'
                                            placeholder='fluffydog@email.com'
                                            handleChange={handleChange}
                                        />
                                            <TextInput
                                            name='password'
                                            type='password'
                                            placeholder='· · · · · · · · · ·'
                                            handleChange={handleChange}
                                        />
                                            {match.path === "/signup" &&
                                                <TextInput
                                                name='confirmPassword'
                                                type='password'
                                                placeholder='· · · · · · · · · ·'
                                                handleChange={handleChange}
                                            />
                                        }

                                        {match.path === "/signup" &&
                                                <TextInput
                                                name='pet'
                                                placeholder='Tipo de Mascota'
                                                handleChange={handleChange}
                                            />
                                        }

                                        {match.path === "/signup" &&
                                                <TextInput
                                                name='breed'
                                                placeholder='Raza'
                                                handleChange={handleChange}
                                            />
                                        }
                                    </div>
                                        <Button text={`${match.path === "/signup" ? "Registrar" : "Ingresar"}`}/>
                            </form>

                                <div className="span-container">
                                    <span> {`${match.path !== '/signup' ? "¿No ta has registrado?" : '¿Ya tienes cuenta?'} | `}
                                        <Link to={match.path !== "/signup" ? "/signup" :"/login" }>
                                        Pulsa aqui</Link>
                                    </span>
                                </div>
                        </div>
                    </div>
                </section>
        )
    }
};