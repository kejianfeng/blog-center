import React, { Component } from "react";
import styles from "./index.module.scss";
import { withRouter, NavLink } from "react-router-dom";

class BlogCard extends Component {
  constructor(props) {
    super(props);
    this.state ={}
  }
  render() {
    console.log()
    const {createTime, blogPic, mianBody, clickSum, commentSum, id, labels} = this.props.blog;
    const date_ = createTime.split("-");
    return (
      <div className={styles.blog_card}>
        <div className={styles.card_left}>
          <div className={styles.time_wrap}>
            <div className={styles.time_circle}>
              <span className={styles.day}>{date_[1]}</span>
              <span className={styles.month}>{date_[2]}日</span>
            </div>
            <span className={styles.year}>{date_[0]}</span>
          </div>
        </div>
        <div className={styles.card_right}>
          <div className={styles.blog_bd}>
            <div className={styles.content}>
              {blogPic && (
                <div className={styles.blog_img}>
                  <img src={blogPic} alt="."/>
                </div>
              )}
              {mianBody && <p className={styles.blog_words}>{mianBody}</p>}
            </div>
            <div className={styles.label_wrap}>
              {
                labels.split(',').map(label => (
                  <span className={`${styles.label} mr10`} key={label}>
                  <i>●</i>{label}
                  </span>
                ))
              }
            </div>
            <div className={styles.bottom_info}>
              <span>热度({clickSum})</span>
              <span>评论({commentSum})</span>
                <NavLink to={{
                  pathname: '/blog/blog-detail',
                  search: `?id=${id}`,
                  state: {
                    blogData: this.props.blog
                  }
                }}>全文链接</NavLink>
            </div>
          </div>
          <div className={styles.blog_line}></div>
        </div>
      </div>
    );
  }
}

export default withRouter(BlogCard);
