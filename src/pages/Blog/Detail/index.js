import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styles from "./index.module.scss";
import { withRouter } from "react-router-dom";
import BlogCard from "../../../components/BlogCard";
import Comment from "../../../components/comment/index";
import CommentList from "../../../components/CommentList/index";
import { request } from "../../../utils/request";
import { message } from "antd";

// import { request } from "../../utils/request";
class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogId: null,
      blogData: null,
      commentData: [],
    };
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
      id: this.state.blogId,
      type: 2,
      ...info,
    });
    const result = await request("/comment/add", "post", params);
    // console.log('呀呀呀呀', params)
    if (result.code === 200) {
      message.success("提交评论成功了哦");
      window.location.reload();
    }
  }
  componentWillMount() {
    const id = this.props.location.pathname.match(/\d+$/);
    console.log("哈哈哈哈", id);
    if (id) {
      this.setState({
        blogId: id[0],
      });
    }
  }
  async componentDidMount() {
    const result = await request("/blog/detail", "post", {
      id: this.state.blogId,
    });
    const { data } = result;
    this.setState({
      blogData: data.blog,
      commentData: data.comment,
    });
  }
  render() {
    const { blogData, commentData } = this.state;
    return (
      <ReactCSSTransitionGroup
      transitionName="animation1"
      transitionAppear={true} 
      transitionAppearTimeout={400}
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      <div className="container">
        <div className="section">
          <div className={styles.content}>
            {blogData && <BlogCard blog={blogData} isShowButton={false}></BlogCard>}
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
                  isComment={true}
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

export default withRouter(BlogDetail);
