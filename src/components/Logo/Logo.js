import React from 'react';

import './Logo.css';

const Logo = props => (
    <img
        className="logo"
        src={props.url}
        alt="logo"/>
);

export default Logo;