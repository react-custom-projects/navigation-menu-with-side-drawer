import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import './App.css';
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
    state = {
        navigationLinks: [
            {label: 'home', url: '/'},
            {
                label: 'about', url: '#', children: [
                    {label: 'who we are', url: '/who-we-are'},
                    {label: 'what we do', url: '/what-we-do'},
                ]
            },
            {
                label: 'portfolio', url: '#', children: [
                    {label: 'photography', url: '/photography'},
                    {label: 'web & interface design', url: '/ui'},
                    {label: 'illustration', url: '/illustration'},
                ]
            },
            {label: 'news', url: '/news'},
            {label: 'contact', url: '/contact'},
        ],
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState(prevState => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop =
                <div className="side-drawer-backdrop">
                    <Backdrop click={this.backdropClickHandler}/>
                </div>;
        }
        return (
            <BrowserRouter>
                <div className="App">
                    <Toolbar openSideDrawer={this.drawerToggleClickHandler}
                             links={this.state.navigationLinks}
                             logoUrl="data:image/png;base64,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"/>
                    <SideDrawer closeSideDrawer={this.backdropClickHandler}
                                openSideDrawer={this.state.sideDrawerOpen}
                                links={this.state.navigationLinks}/>
                    {backdrop}
                    <main>
                        <h1>Page content</h1>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
