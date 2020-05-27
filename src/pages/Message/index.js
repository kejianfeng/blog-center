import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Person from '../../components/Person/index'
import Comment from "../../components/comment/index";
import CommentList from "../../components/CommentList/index";
import message from "../../components/Message";
import { request } from "../../utils/request";
import styles from "./index.module.scss";
class Message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentData: []
    }
    this.commentref = this.commentref.bind(this);
    this.hanleQuote = this.hanleQuote.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }
  commentref(ref) {
    //绑定comment组件上下文到this.child上
    this.child = ref;
  }
  hanleQuote(value) {
    //commentList子组件调用该方法，输出引用内容
    this.child.setQuote(value);
  }
  async submitComment(info) {
    const params = Object.assign({}, info, {
      type: 3,
      ...info,
    });
    const result = await request("/comment/add", "post", params);
    // console.log('呀呀呀呀', params)
    if (result.code === 200) {
      message.success("提交评论成功了哦");
      window.location.reload();
    }
  }
  async componentDidMount() {
    const result = await request("/message/list", "get");
    const { data } = result;
    this.setState({
      commentData: data.reverse(),
    });
  }
  render() {
    const { commentData } = this.state;
    return (
      <ReactCSSTransitionGroup
            transitionName="animation2"
            transitionAppear={true} 
            transitionAppearTimeout={400}
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
      <div className={styles.box_main}>
         <div className="container-wrap">
          <div className="col-side">
            <Person></Person>
          </div>
          <div className="col-main">
            <div className={styles.comment_out_box}>
                <div className={styles.comment_bd}>
                  {commentData.length > 0 && (
                    <CommentList
                      commentData={commentData}
                      hanleQuote={this.hanleQuote}
                    />
                  )}
                  <Comment
                    commentref={this.commentref}
                    isComment={false}
                    submitComment={this.submitComment}
                  />
                </div>
              </div>
            </div>
        </div>  
      </div>
          </ReactCSSTransitionGroup>
    );
  }
}

export default Message;
