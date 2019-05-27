import React, { Component } from 'react';
import './Layout.css';

import Aux from '../../hoc/Auxiliary';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
           return {showSideDrawer: !prevState.showSideDrawer}
        });
    }
    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer closed={this.closeSideDrawerHandler} open={this.state.showSideDrawer} />
                <main className="Content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;