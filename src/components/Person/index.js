import React, {Component} from "react";
import styles from './index.module.scss'
class Person extends Component{
    render() {
        return (
          <div className={`${styles.person} shadow-1`}>
          <div className={styles.avator}>
            <img src="https://images.vrm.cn/jx/2020/05/04/pexels-photo-4171211.jpeg" alt="..."/>
          </div>
          <p className={styles.myname}>Jamki</p>
          <div className={styles.data_show}>
            <div className={styles.show_item}>
              <span>12</span>
              <div>文章</div>
            </div>
            <div className={`${styles.show_item} ${styles.border_edge}`}>
              <span>43</span>
              <div>留言</div>
            </div>
            <div className={styles.show_item}>
              <span>67</span>
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