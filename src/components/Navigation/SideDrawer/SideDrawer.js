import React from 'react';
import './SideDrawer.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    
    return(
        <div className="SideDrawer">
            <Logo height="11%" style={{marginBottom: "32px"}} />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideDrawer;