import React, {Component} from "react";
import styles from './index.module.scss'
import {request} from '../../utils/request'
class Person extends Component{
  constructor(props) {
    super(props);
    this.state = {
      overView:{}
    }
  }
    componentWillMount() {
      request('/archives/getOverview', 'get').then(res => {
        this.setState({
          overView:res.data
        })
      })
    }
    render() {
        const {aticleNum, messaggeNum, sourceNum} = this.state.overView
        return (
          <div className={`${styles.person} shadow-1`}>
          <div className={styles.avator}>
            <img src="https://images.vrm.cn/jx/2020/05/18/me_1.jpg" alt="..."/>
          </div>
          <p className={styles.myname}>Jamki</p>
          <div className={styles.data_show}>
            <div className={styles.show_item}>
        <span>{aticleNum}</span>
              <div>文章</div>
            </div>
            <div className={`${styles.show_item} ${styles.border_edge}`}>
        <span>{messaggeNum}</span>
              <div>留言</div>
            </div>
            <div className={styles.show_item}>
        <span>{sourceNum}</span>
              <div>资源</div>
            </div>
          </div>
          <div className={styles.contact_link}>
            <a href="//www.baodu.com"><span className="icon iconfont">&#xf1b4;</span>github</a>
            <a href="//www.baodu.com"><span className="icon iconfont">&#xe600;</span>CSDN</a>
            <a href="//www.baodu.com"><span className="icon iconfont">&#xe610;</span>掘金</a>
          </div>
        </div>
        )
    }
}

export default Person