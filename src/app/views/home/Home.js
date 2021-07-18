import React, { Component } from 'react';
import './styles.css'
import { Footer, Navbar, Cover, About, CardServices, Faq } from '../../components';


class Home extends Component{
    render(){
        return(
            <section>
            <Navbar/>
            <Cover/>
            <About/>
            <CardServices/>
            <Faq/>
            <Footer/>
         </section>
        )
    }
}


export default Home;