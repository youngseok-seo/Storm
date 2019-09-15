import React from 'react';
import './landingPage.css';

import LandingLogoView from '../../components/Landing/LandingLogoView';
import StormLogo from '../../logo-storm.png';

const LandingPage = () => (
    <div className = 'landingPage'>
        <Logo/>
        <LandingLogoView/>
    </div>
)

const Logo = () => (
    <div>
        <img src={StormLogo}  className='logo'/>
    </div>
    
)

export default LandingPage;