import React,  {Component} from 'react';
import './styles.css'
import logo from '../../assets/images/logo.png'
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
        const {user} = this.state
        const {handleChange,handleSubmit} = this
        const {match} = this.props
        return(
            <section className="auth-container">

                <div className="container" id="container">
        <div className="form-container sign-up-container body-form">
            <form>
                <h1 className="h1-form">Create Account</h1>
                <span className=".span-form">or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit={handleSubmit}>
                <h1 className="h1-form">Sign in</h1>
                <div className="container-fields">
                       {match.path === "/signup" &&
                                <TextInput
                                name='name'
                                placeholder='Name'
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
                                placeholder='Pet type'
                                handleChange={handleChange}
                            />
                        }

                        {match.path === "/signup" &&
                                <TextInput
                                name='breed'
                                placeholder='Pet breed'
                                handleChange={handleChange}
                            />
                        }
                     </div>
                        <Button text={`${match.path === "/signup" ? "Sign up" : "Sign in"}`}/>
            </form>

                <div>
                    <span> {`${match.path !== '/signup' ? "Wanna sign up?" : 'Do you have an account?'} | `}
                        <Link to={match.path !== "/signup" ? "/signup" :"/login" }>
                        Click here</Link>
                    </span>
                </div>
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                    <h1 className="h1-form">Hello, Doggo lover!</h1>
                    {match.path === "/signup" ?
                    <p className="p-form">If you already have an account, click on the button to login!</p>
                    :
                    <p className="p-form"> If you don't have an account yet, enter your personal<br/>details and start journey with us</p>

                    }
                    <Button text={`${match.path === "/login" ? "Sign up" : "Sign in"}`}/>
                </div>
            </div>
        </div>
    </div>
</section>
        )
    }
};