import React, { Component } from "react";
import "./index.scss";
class ShareCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cover, siteName, note } = this.props.cardData;
    return (
      <div className="card-wrap mt20 mr20">
        <div className="card-hd">
          <span className="jump">前往</span>
          <img src={cover} alt="这是图片"></img>
        </div>
        <div className="card-bd">
          <div className="note">
            <p className="site-name">{siteName}</p>
            <p>{note}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShareCard;
