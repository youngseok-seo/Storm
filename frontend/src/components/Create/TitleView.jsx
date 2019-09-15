import React from 'react';
import './titleView.css';

const TitleView = ({ value, onChange }) => (
    <textarea
        className='titleView'
        placeholder="Title"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
    />
)

export default TitleView;