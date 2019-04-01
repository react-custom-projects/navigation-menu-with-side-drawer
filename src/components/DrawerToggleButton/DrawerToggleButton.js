import React from 'react';

import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle-button"
            onClick={props.click}>
        <i className="fas fa-bars"/>
    </button>
);

export default DrawerToggleButton;