import React, {Component} from 'react';
import { withRouter} from "react-router-dom";
import styles from "./index.module.scss";
class ArticleCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  enter_detail(ev,id, content) {
    ev.preventDefault();
    console.log(id)
    this.props.history.push({
      pathname:'/article/article-detail',
      search: `?id=${id}`,
      // state: {
      //   articleBody: content
      // }
      state: {
        articlData: content
      }
    })
  }
  render() {
    const {id,title, summary, createTime, updateTime, topic, labels, commentSum, clickSum} = this.props.articleList
      return (
          <div className={styles.article_wrap}>
            <div className={styles.aricle_hd}>
      <h1 className={styles.title} onClick={(ev) => {this.enter_detail(ev, id, this.props.articleList)}}>{title}</h1>
              <div className={styles.head_info}>
                <div className={styles.time}>
      <span className="label_style"> <i className="iconfont icon-shizhong fs-sm mr5"></i>{createTime}</span>
      <span className="label_style"> <i className="iconfont icon-gengxin fs-sm mr5"></i>{updateTime}</span>
                </div>
      <span className={styles.topic}>{topic}</span>
              </div>
            </div>
            <p className={styles.article_summary}>
              {summary}
            </p>
            <div className={styles.bottom_info}>
              <div className={styles.label_wrap}>
                <i className="iconfont icon-biaoqian fs-sm mr5"></i>
                {
                  labels.split(',').map(label => (
                  <span className="label_style" key={label}>{label}</span>
                  ))
                }
              </div>
              <div className={styles.review_wrap}>
                <span className="label_style">阅读({clickSum})</span>
                <span className="label_style">评论({commentSum})</span>
                <span className={`${styles.article_link} label_style`} >全文链接-></span>
              </div>
            </div>
          </div>
      )
  }
}
export default withRouter(ArticleCard)