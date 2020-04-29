import React, { Component } from "react";
import Comment from '../../components/comment/index'
import "./index.scss";
// import { Button } from 'antd';
class Message extends Component {
  render() {
    return (
      <div className="name">
        <Comment />
      </div>  
    );
  }
}

export default Message;
