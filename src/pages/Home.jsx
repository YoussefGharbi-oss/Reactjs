import React from 'react';
import NavBar from '../Components/NavBar';
import '../Components/Home.css'
import '../Components/description.css'
import '../Components/Blog.css'
import Header from '../Components/Header';
import Description from '../Components/Description';
import Details from '../Components/Details';
import Feature from '../Components/Feature';
import Blog from '../Components/Blog';
import Footer from '../Components/Footer';



function Home(props) {

    return (
        <div >
            <NavBar />
            <Header />
            <Description />
            <Details />
            <Feature />
            <Blog />
            <Footer />
        
        </div>
        
    );
}

export default Home;