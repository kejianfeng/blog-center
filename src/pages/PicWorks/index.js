import React, { Component } from "react";
import styles from "./index.module.scss";
import { request } from "../../utils/request";
import PicCard from '../../components/PicCard/index'

// import { Button } from 'antd';
class PicWorks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column_1:[],
      column_2:[],
      column_3:[]
    }
  }
  async componentWillMount() {
    const column_1 = [],
          column_2 = [],
          column_3 = [];
    
    const listData = (await request("/picworks/piclist", "get")).data
    var i  = 0;
    const list_length = listData.length
    while(i < list_length) {
      column_1.push(listData[i++])
      i < list_length && column_2.push(listData[i++])
      i < list_length && column_3.push(listData[i++])
    }
    this.setState({
      column_1,
      column_2,
      column_3
    })
  }
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className={styles.content}>
            <div className={styles.masonry}>
              <div className={styles.column}>
                {
                  this.state.column_1.map(item => (
                    <PicCard key={item.id} picWork={item}></PicCard>
                  ))
                }
              </div>
              <div className={`${styles.column} ml20 mr20`}>
              {
                  this.state.column_2.map(item => (
                    <PicCard key={item.id} picWork={item}></PicCard>
                  ))
                }
              </div>
              <div className={styles.column}>
              {
                  this.state.column_3.map(item => (
                    <PicCard key={item.id} picWork={item}></PicCard>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default PicWorks;
