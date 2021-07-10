import React from 'react';
import './styles.css'
import logo from '../../assets/images/logo.png'
import {Link}  from 'react-router-dom'
import { Slide } from '../../components';

                //react-router-dom
const Home = ({history,location,match}) => (

    <section className="home-container" >
    <Slide/>
        <div className="title-section">
            <img src={logo} width="30%" alt=""/>
            <h1 className="title-text">
                Best Software tool for Veterinary
            </h1>
            <span>
                <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
            </span>
        </div>
    </section>
)


export default Home;