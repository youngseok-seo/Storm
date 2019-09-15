import React, { Component } from 'react';
import './createPage.css';

import { LinkButtonView } from '../../components/UI/ButtonView';
import WriteView from '../../components/Create/WriteView';
import IconView from '../../components/UI/IconView';
import TitleView from '../../components/Create/TitleView';

const CreatePage = ({onClick}) => (
    <div className = 'createPage'>
        <IconView/>
        <TitleView onChange={() => 1}/>
        <WriteView onChange={() => 1}/>
        <LinkButtonView to='/story'>
            Save and Animate
        </LinkButtonView>
    </div> 
)

export default CreatePage;
