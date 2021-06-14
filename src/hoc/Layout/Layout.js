import React, { Component } from "react";
import { connect } from "react-redux";

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
          isAuth={this.props.isAuthenticated}
        />
        <Toolbar
          drawerToggleClicked={this.sideDrawerCloseHandler}
          isAuth={this.props.isAuthenticated}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
