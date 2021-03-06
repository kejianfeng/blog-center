import React, { Component } from "react";
import "./App.css";
import HeadBar from "./components/HeadBar/index.js";
import Footer from "./components/Footer/index.js";
import router from "./router/index.js";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: false,
    };
  }
  componentDidMount() {
    window.location.pathname !== "/"
      ? this.setState({
          showHeader: true,
        })
      : this.setState({
          showHeader: false,
        });
    this.showHeader();
  }
  showHeader() {
    this.props.history.listen((location) => {
      location.pathname !== "/"
        ? this.setState({
            showHeader: true,
          })
        : this.setState({
            showHeader: false,
          });
    });
  }
  render() {
    return (
      <div className="App">
        <div className="APP-main">
          {this.state.showHeader ? <HeadBar /> : ""}
          {renderRoutes(router)}
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
