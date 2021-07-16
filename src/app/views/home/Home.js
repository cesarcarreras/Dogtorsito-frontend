import React from 'react';
import './styles.css'
import {Link}  from 'react-router-dom'
import { Footer, Navbar, Slide, HomeIcons, SearchBar } from '../../components';


                //react-router-dom
const Home = () => (
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