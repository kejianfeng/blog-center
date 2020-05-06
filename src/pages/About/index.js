import React, { Component } from "react";
import Person from '../../components/Person/index'
import Comment from "../../components/comment/index";
import CommentList from "../../components/CommentList/index";
import { message, Divider } from "antd";
import { request } from "../../utils/request";
import styles from "./index.module.scss";
// import { Button } from 'antd';
class About extends Component {
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
      commentData: data,
    });
  }
  render() {
    return (
      <div className={styles.box_main}>
        <div className="container-wrap">
          <div className="col-side">
            <Person></Person>
          </div>
          <div className="col-main">
            <div className={styles.box_about}>
              <p className={styles.title}>
                <span className={`icon iconfont ${styles.icon_about}`}>&#xe621;</span>
                关于我
              </p>
              <div className={styles.intro}>
                <dd>柯剑烽，一名憨厚老实的茂名人~~, 2019年七月毕业于宇宙工大（广东工业大学）</dd>
              </div>
            </div>
        </div>  
      </div>
      </div>
    );
  }
}

export default About;
