import React from 'react';

import './Toolbar.css';
import DrawerToggleButton from "../DrawerToggleButton/DrawerToggleButton";
import Logo from "../Logo/Logo";
import MainMenu from "../MainMenu/MainMenu";

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <Logo url={props.logoUrl}/>
            <div className="spacer"/>
            <div className="toolbar-navigation-items">
                <MainMenu links={props.links}/>
                <button>click me</button>
            </div>
           <div className="toolbar-toggle-button">
               <DrawerToggleButton click={props.openSideDrawer}/>
           </div>
        </nav>
    </header>
);

export default Toolbar;