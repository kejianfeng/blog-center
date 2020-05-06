import React, { Component } from "react";
import "./App.css";
import HeadBar from "./components/HeadBar/index.js";
import Footer from "./components/Footer/index.js";
import router from "./router/index.js";
import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// let url = window.location.pathname

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
    const { location } = this.props;
    return (
      // <BrowserRouter>
      <div className="App">
        <div className="APP-main">
          {this.state.showHeader ? <HeadBar /> : ""}
          <TransitionGroup className={"router-wrapper"}>
            <CSSTransition
              classNames={"fade"}
              appear={true}
              key={location.pathname}
              timeout={300}
              unmountOnExit={true}
            >
              {renderRoutes(router)}
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div>
          <Footer />
        </div>
      </div>
      // </BrowserRouter>
    );
  }
}

export default withRouter(App);
