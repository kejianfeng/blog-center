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
          小剑烽的博客   
      </div>
    );
  }
}

export default Home;
