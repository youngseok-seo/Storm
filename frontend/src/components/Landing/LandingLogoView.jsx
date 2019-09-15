import React from 'react';
import './landingLogoView.css';
import {LinkButtonView} from '../UI/ButtonView';

const LandingLogoView = () => (
    <div>
        <div className = 'landingLogo'>
            Storm
        </div>
        <LinkButtonView to='/home'>
            Let's get started!
        </LinkButtonView>
    </div>
)

export default LandingLogoView;