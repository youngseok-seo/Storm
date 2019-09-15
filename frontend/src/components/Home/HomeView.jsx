import React from 'react';
import './homeView.css';

import {LinkButtonView} from '../UI/ButtonView';
import IconView from '../UI/IconView';

const HomeView = () => (
    <div className='homeView'>
        <LinkButtonView to="/create" style={{"margin":"17px"}}>
            <div className='buttons'>
                CREATE a story.
            </div>
        </LinkButtonView>

        <LinkButtonView to="/story" style={{"margin":"17px"}}>
            <div className='buttons'>
                READ a story.
            </div>
        </LinkButtonView>   
    </div>
)

export default HomeView;