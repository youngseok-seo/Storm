import React from 'react';
import './landingPage.css';

import LandingLogoView from '../../components/Landing/LandingLogoView';
import StormLogo from '../../69946631_439973109944134_7220613243243331584_n.png'

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