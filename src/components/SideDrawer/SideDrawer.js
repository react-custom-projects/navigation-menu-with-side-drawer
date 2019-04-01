import React from 'react';

import './SideDrawer.css';
import MainMenu from "../MainMenu/MainMenu";

const SideDrawer = props => (
    <div className={'side-drawer ' + (props.openSideDrawer ? 'open-side-drawer' : '')}>
        <i className={'fas fa-chevron-right ' + (props.openSideDrawer ? 'close-side-drawer' : '')}
           onClick={props.closeSideDrawer}/>
        <nav>
            <MainMenu links={props.links}/>
            <button>click me</button>
        </nav>
    </div>
);

export default SideDrawer;