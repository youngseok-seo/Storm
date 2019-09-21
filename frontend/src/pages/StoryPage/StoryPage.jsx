import React, {useState} from 'react';
import './storyPage.css';

import IconView from '../../components/UI/IconView';
import { LinkButtonView } from '../../components/UI/ButtonView';

import openSocket from 'socket.io-client';

import FirstScene from '../../scene0.png';
import SecondScene from '../../scene1.png';
import ThirdScene from '../../scene2.jpg';
import FourthScene from '../../scene3.jpg';
import FifthScene from '../../scene4.jpg';
import SixthScene from '../../scene5.jpg';
import SeventhScene from '../../scene6.jpg';

const socket = openSocket('http://localhost:3001');

const StoryPage = ({}) => {
    const [image, setImage] = useState(FirstScene)
    const [data, setData] = useState('')

    socket.on('object_name', data => {
        console.log(data)

        setData(data)
        
        if (data === "hack the north")
        {
            setImage(SecondScene)
        }
        else if (data === "evil goose")
        {
            setImage(ThirdScene)
        }
        else if (data === "coding project")
        {
            setImage(FourthScene)
        }
        else if (data === "three boys and one girl")
        {
            setImage(FifthScene)
        }
        else if (data === "prizes")
        {
            setImage(SixthScene)
        }
        else if (data === "amazon echos")
        {
            setImage(SeventhScene)
        }
    })

    return(
        <div className='storyPage'>
            <IconView/>
                <div className='imageHolder'>
                    <img className='image' src={image} key={data}/>
                </div>
            <div className='button'>
                <LinkButtonView to='/home'>
                    Back to Home
                </LinkButtonView>
            </div>  
        </div>
    )   
}

export default StoryPage;