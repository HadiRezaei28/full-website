import React from 'react';
import Navbar from '../Navbar/Navbar';
import Feature from './Feature/Feature';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Feature />
        </div>
    );
};

export default Home;