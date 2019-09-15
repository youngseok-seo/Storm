import React from 'react';
import './storyPage.css';

import IconView from '../../components/UI/IconView';
import { LinkButtonView } from '../../components/UI/ButtonView';

import openSocket from 'socket.io-client';

const socket = openSocket('http://b56a6d0c.ngrok.io');

socket.on('add_object', data => {
    console.log(data)
})

const StoryPage = () => {
    return(
        <div className='storyPage'>
            <IconView/>
            <div className='button'>
                <LinkButtonView to='/home'>
                    Back to Home
                </LinkButtonView>
            </div>  
        </div>
    )   
}

export default StoryPage;