import React, { Component } from "react";
import "./index.scss";
class ShareCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { site_pic, site_name, site_text} = this.props.cardData;
    return (
      <div className="card-wrap mt20 mr20">
        <div className="card-hd">
          <span className="jump">前往</span>
          <img src={site_pic} alt="这是图片"></img>
        </div>
        <div className="card-bd">
          <div className="note">
            <p className="site-name">{site_name}</p>
            <p>{site_text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShareCard;
