import React from 'react';
import './MainMenu.css';

import {Link} from 'react-router-dom';
import NavigationItem from "./NavigationItem/NavigationItem";

const MainMenu = props => {
    let navigationItems = props.links.map((el, i) =>
        (el.children === undefined
                ? <NavigationItem key={i}
                                  url={el.url}
                                  label={el.label}/>
                : <li key={i}>
                    <Link to={el.url}>
                        {el.label} <i className="fas fa-chevron-down"/>
                    </Link>
                    <ul className="hidden main-menu-dropdown">
                        {el.children.map((childEl, i) =>
                            (
                                <NavigationItem key={i}
                                                url={childEl.url}
                                                label={childEl.label}/>
                            ))}
                    </ul>
                </li>
        ));
    return (
        <React.Fragment>
            <div className="main-navigation">
                <ul>
                    {navigationItems}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default MainMenu;