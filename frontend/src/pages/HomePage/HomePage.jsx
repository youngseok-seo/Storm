import React from 'react';
import './homePage.css';
import HomeView from '../../components/Home/HomeView';
import IconView from '../../components/UI/IconView';

const HomePage = () => (
    <div className = 'homePage'>
        <IconView/>
        <HomeView/>
    </div>
)

export default HomePage;