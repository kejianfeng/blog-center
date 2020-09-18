import React, { Component } from "react";
import styles from "./index.module.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitelist: []
    };
  }
  render() {
    return (
      <div className={styles.footer}>
          <span className="mr20">小剑烽的博客</span>
          <a href="https://beian.miit.gov.cn" target="_blank" style={{color: "#666"}}>[粤ICP备20037724号-1]</a>
      </div>
    )
  }
}

export default Home;
