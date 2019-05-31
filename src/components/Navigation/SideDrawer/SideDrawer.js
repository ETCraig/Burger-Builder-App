import React from 'react';
import './SideDrawer.css';

import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = (props) => {
    let attachedClasses = ['Open', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" style={{ marginBottom: "32px" }} />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;