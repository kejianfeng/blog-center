import React, { Component } from "react";
import styles from "./index.module.scss";
import { withRouter } from "react-router-dom";
import Comment from "../../../components/comment/index";
import CommentList from "../../../components/CommentList/index";
// import { request } from "../../utils/request";

const commentData = [
  {
    id:12,
    nickname:'jAMKI小剑烽',
    comment:'那....当然不是，哈哈哈，图是原文作者的，学习了，以后向这个标准对齐',
    createDate: '2020-04-30',
    quote: {
      nickname:' jamki',
      comment: '我发现你真是一条狗'

    }
  },
  {
    id:45,
    nickname:'jAMKI小剑烽',
    comment:'那....当然不是，哈哈哈，图是原文作者的，学习了，以后向这个标准对齐',
    createDate: '2020-04-30'
  },
  {
    id:178,
    nickname:'jAMKI小剑烽',
    comment:'那....当然不是，哈哈哈，图是原文作者的，学习了，以后向这个标准对齐',
    createDate: '2020-04-30',
    quote: {
      nickname:' jamki',
      comment: '我发现你真是一条狗'

    }
  }
]
class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: null
    };
    this.commentref = this.commentref.bind(this)
    this.hanleQuote = this.hanleQuote.bind(this)
    this.submitComment = this.submitComment.bind(this)
  }
  hanleQuote(value) { //commentList子组件调用该方法，输出引用内容
    this.child.setQuote(value)
  }
  commentref(ref) { //绑定comment组件上下文到this.child上
    this.child = ref
  }
  submitComment(info) {
    console.log('呀呀呀呀', info)
  }
  componentWillMount() {
    console.log(this.props)
    const articleId =  this.props.location.search.match(/(?<=id=)\d+$/)
    if (articleId) {
      this.setState({
        articleId: articleId[0]
      })
    }else {
      this.props.history.push('/article')
      return
    }
    

  }
  render() {
    const { articlData } = this.props.location.state;
    return (
      <div>
        <div className="container">
          <div className="section">
            <div className={`${styles.content} mt20`}>
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
          <span className={styles.like_box}>
            <i className="icon iconfont">&#xe61a;</i>
          </span>
        </div>
        <div className="container">
          <div className="section">
            <div className={styles.content}>
              <CommentList commentData={commentData} hanleQuote={this.hanleQuote}/>
              <Comment commentref={this.commentref} submitComment={this.submitComment}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleDetail);
