import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from "react-router-dom";
import './index.css';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

var fundebug = require("fundebug-javascript");
fundebug.apikey = "e3d016ab381fdc018e5ddb1ce36bbe64c02bfcaaed249ef3aa942115bdc1739d";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // 将component中的报错发送到Fundebug
    fundebug.notifyError(error, {
      metaData: {
        info: info
      }
    });
  }

  render() {
    if (this.state.hasError) {
      return null;
      // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
    }
    return this.props.children;
  }
}
ReactDOM.render( <ErrorBoundary><BrowserRouter><App /></BrowserRouter></ ErrorBoundary>, 
  document.getElementById('root'));

serviceWorker.unregister();
