import React from 'react';
import Navbar from '../Navbar/Navbar';
import Download from './Download/Download';
import Feature from './Feature/Feature';
import Header from './Header/Header';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Feature />
            <Download />
            <Subscribe />
        </div>
    );
};

export default Home;