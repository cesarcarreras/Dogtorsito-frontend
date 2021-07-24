import React, { Component } from 'react';
import { Footer, Navbar, Cover, About, CardServices, Team } from '../../components';


class Home extends Component{
    render(){
        return(
            <section>
            <Navbar/>
            <Cover/>
            <About/>
            <CardServices/>
            <Team/>
            <Footer/>
         </section>
        )
    }
}


export default Home;