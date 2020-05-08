import React, { Component } from "react";
import styles from "./index.module.scss";
import { request } from "../../utils/request";
import { withRouter} from "react-router-dom";
import BlogCard from '../../components/BlogCard'

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloglist: []
    }
}
  componentDidMount() {
    request("/blog/bloglist", "get").then(res => {
      this.setState({
        bloglist: res.data
      });
    });
  }
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className={styles.content}>
            <div className={styles.blog_wrap}>
              <div className={styles.blog_cover}>
                <img src="https://images.vrm.cn/jx/2020/01/24/8e57c159882179.5a5901b214c44.jpg" className={styles.cover_img} alt="."></img>
                <div className={styles.motto}>
                  <h2>烽芒</h2>
                  <p>若能光芒四射 何必自甘沉沦</p>
                </div>
              </div>
              <div className={styles.blog_list}>
                {
                  this.state.bloglist.map(item => (
                    <BlogCard blog={item} isShowButton={true} key={item.id}></BlogCard>
                  ))
                }
              </div>
            </div>
            <div className="load-more">
          <span>加载更多<i className="icon iconfont">&#xe612;</i></span>
        </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default withRouter(Blog);
