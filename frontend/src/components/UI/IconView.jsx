import React from "react";
import "./iconView.css";

import logo from '../../logo-storm.png'

const IconView = () => (
  <div className='iconView'>
    <img className='icon' src={logo}/>
    <div className='logo'>
      Storm
    </div>
  </div>
)

export default IconView;