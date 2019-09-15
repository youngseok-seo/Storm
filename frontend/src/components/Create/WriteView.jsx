import React  from 'react';
import './writeView.css';

const WriteView = ({ value, onChange }) => (
    <textarea
        className="writeView"
        placeholder="What's the story for today?"
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
    />
)

export default WriteView; 