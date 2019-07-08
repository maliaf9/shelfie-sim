import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './ToolBar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                 <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">LOGO </a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation_items"> 
                <ul>
                    <li><a to="./home">Home</a></li>
                    <li><a to="./contact">Contact</a></li>
                    <li><a to="./herbs">Herbs</a></li>

                </ul>
            </div>


        </nav>
    </header>
);

export default toolbar;