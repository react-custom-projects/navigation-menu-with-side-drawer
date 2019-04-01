import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavigationItem.css';

const NavigationItem = props => (
    <li className="navigation-item">
        <NavLink exact
                 to={props.url}>
            {props.label}
        </NavLink>
    </li>
);

export default NavigationItem;