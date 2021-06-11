import React, { Component } from "react";

import classes from "./Layout.css";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
class Layout extends Component {
  state = {
    sideDrawer: true,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ sideDrawer: false });
  };

  sideDrawerCloseHandler = () => {
    this.setState((prevState) => {
      return { sideDrawer: !prevState.sideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <SideDrawer
          open={this.state.sideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <Toolbar drawerToggleClicked={this.sideDrawerCloseHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
