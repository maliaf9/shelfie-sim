import React from 'react';
import './DrawerToggleButton.css'

const drawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-line"/>
        <div className="toggle-line"/>
        <div className="toggle-line"/>

    </button>
);

export default drawerToggleButton