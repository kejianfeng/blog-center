import React, { Component } from "react";
import ShardCard from "../../components/ShareCard/index";
import { request } from "../../utils/request";
import styles from "./index.module.scss";
// import { Button } from 'antd';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitelist: []
    };
  }
  componentDidMount() {
    // console.log(3333)
    request("/home/sitelist", "get").then(res => {
      // console.log(res)
      this.setState({
        sitelist: res.data
      });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="section">
          {this.state.sitelist.map(list => (
            <div className={`${styles.content} mt20`}>
              <div className={`${styles.title} fs-lg`}>/ {list.type} /</div>
              <div className={styles.card_list}>
                {list.list.map(item => (
                  <ShardCard cardData={item} key={item.id}></ShardCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
