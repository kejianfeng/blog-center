import React, { Component } from "react";
import styles from "./index.module.scss";
import { withRouter } from "react-router-dom";
import Comment from "../../../components/comment/index";
// import { request } from "../../utils/request";
class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { articlData } = this.props.location.state;
    return (
      <div>
        <div className="container">
          <div className="section">
            <div className={styles.content}>
              <article>
                <div className={styles.article_hd}>
                  <h1 className={styles.title}>{articlData.title}</h1>
                  <div className={styles.head_info}>
                    <div className={styles.time}>
                      <span className="label_style">
                        <i className="iconfont icon-shizhong fs-sm mr5"></i>
                        {articlData.createTime}
                      </span>
                      <span className="label_style">
                        <i className="iconfont icon-gengxin fs-sm mr5"></i>
                        {articlData.updateTime}
                      </span>
                    </div>
                    <span className={styles.topic}>{articlData.topic}</span>
                  </div>
                </div>
                <div className={styles.article_bd}>
                  <div
                    dangerouslySetInnerHTML={{ __html: articlData.content }}
                  ></div>
                  <div className={styles.label_wrap}>
                    <i className="iconfont icon-biaoqian fs-sm mr5"></i>
                    {articlData.labels.split(",").map((label) => (
                      <span className="label_style" key={label}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              <div className={styles.pre_next}>
                <div className={styles.pre_article}>
                  <span>
                    <i className="iconfont icon-zuo"></i>上一篇
                  </span>
                </div>
                <div className={styles.next_article}>
                  <span>
                    下一篇<i className="iconfont icon-you"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.like}>
          <span class="icon iconfont icon-dianzan"></span>
        </div>
        <div className="container">
          <div className="section">
            <div className={styles.content}>
              <Comment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleDetail);
