import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styles from "./index.module.scss";
import { withRouter } from "react-router-dom";
import Comment from "../../../components/comment/index";
import CommentList from "../../../components/CommentList/index";
import { request } from "../../../utils/request";
import {message} from 'antd'

class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: null,
      articleData: null,
      commentData:[],
      likeSum: 0,
      isLike: false,
      isHideClick: false
    };
    this.commentref = this.commentref.bind(this)
    this.hanleQuote = this.hanleQuote.bind(this)
    this.submitComment = this.submitComment.bind(this)
    this.likeClick = this.likeClick.bind(this)
  }
  hanleQuote(value) { //commentList子组件调用该方法，输出引用内容
    this.child.setQuote(value)
  }
  commentref(ref) { //绑定comment组件上下文到this.child上
    this.child = ref
  }
  async submitComment(info) {
    const params = Object.assign({}, info, {
      id: this.state.articleId,
      type: 1,
      ...info
    })
    const result = await request('/comment/add', 'post', params)
    // console.log('呀呀呀呀', params)
    if(result.code === 200) {
      message.success('提交评论成功了哦')
      window.location.reload()
    }
  }
  async componentWillMount() {
    const id = this.props.location.pathname.match(/\d+$/);
    if (id) {
      this.setState({
        articleId: id[0]
      })
    }else {
      window.location.href = '/article'
      // this.props.history.push('/article')
      return false
    }
  }
  async likeClick() {
    this.setState({
      isHideClick: true
    })
    const result = await request('/article/like', 'post', {
      id: this.state.articleId
    })
    result.code === 200 && this.setState({
      likeSum: this.state.likeSum + 1,
      isLike: true
    })
  }
  async componentDidMount() {
    const result = await request('/article/detail', 'post', {
      id: this.state.articleId
    })
    const {data} = result
    this.setState({
      articleData: data.article,
      commentData: data.comment,
      likeSum: data.article.likeSum
    })
  }
  render() {
    const { articleData, commentData, likeSum, isLike, isHideClick } = this.state;
    return (
      <ReactCSSTransitionGroup
      transitionName="animation1"
      transitionAppear={true} 
      transitionAppearTimeout={400}
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      <div>
        <div className="container">
          <div className="section">
            <div className={`${styles.content} mt20`}>
              {
                articleData && <article>
                <div className={styles.article_hd}>
                  <h1 className={styles.title}>{articleData.title}</h1>
                  <div className={styles.head_info}>
                    <div className={styles.time}>
                      <span className="label_style">
                        <i className="iconfont icon-shizhong fs-sm mr5"></i>
                        {articleData.createTime}
                      </span>
                      <span className="label_style">
                        <i className="iconfont icon-gengxin fs-sm mr5"></i>
                        {articleData.updateTime}
                      </span>
                    </div>
                    <span className={styles.topic}>{articleData.topic}</span>
                  </div>
                </div>
                <div className={styles.article_bd}>
                  <div
                    dangerouslySetInnerHTML={{ __html: articleData.mainBody }}
                  ></div>
                  <div className={styles.label_wrap}>
                    <i className="iconfont icon-biaoqian fs-sm mr5"></i>
                    {articleData.labels.split(",").map((label) => (
                      <span className="label_style" key={label}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
              }
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
          <span className={styles.like_box} onClick={this.likeClick} style={{'color': isLike ? '#FF6A6A' : '#aaa', 'borderColor': isLike ?'#FF6A6A':'#aaa', 'pointerEvents': isHideClick ? 'none' : 'auto'}}>
            <i className="icon iconfont">&#xe61a;</i>
          </span>
          {
            likeSum >0 && <span className={styles.number}>点赞({likeSum})</span>
          }
        </div>
        <div className="container">
          <div className="section">
            <div className={styles.content}>
              {
                 commentData.length > 0 && <CommentList commentData={commentData} hanleQuote={this.hanleQuote}/>
              }
               <Comment commentref={this.commentref} isComment={true} submitComment={this.submitComment}/>
            </div>
          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
    );
  }
}

export default withRouter(ArticleDetail);
