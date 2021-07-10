import React from 'react';
import './styles.css'
import logo from '../../assets/images/logo.png'
import {Link}  from 'react-router-dom'
import { Footer, Navbar, Slide, HomeIcons } from '../../components';


                //react-router-dom
const Home = ({}) => (
    <section>
    <Navbar/>
    <section className="home-container" >
    <Slide>
    </Slide>
    <div>
    <h1>Sistema para veterinaria</h1>
    <h3>Software Gestión de clinicas Veterinarias</h3>
    </div>
    <section className="home-icons">
    <HomeIcons/>
    <HomeIcons/>
    <HomeIcons/>
    <HomeIcons/>
    </section>
    </section>
    <Footer/>
 </section>
)


export default Home;

{/* <div className="title-section">
<img src={logo} width="30%" alt=""/>
<h1 className="title-text">
    Best Software tool for Veterinary
</h1>
<span>
    <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
</span>
</div> */}