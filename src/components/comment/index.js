import React, { Component } from "react";
import styles from "./index.module.scss";
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      nickname: "",
      email: "",
      site: "",
      quoteNickname: '',
      quoteComment:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.setQuote = this.setQuote.bind(this);
  }
  componentDidMount() {
    //执行子组件上下文绑定
    this.props.commentref(this);
  }
  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  setQuote(value) {
    //点击引用
    this.setState({
      quoteComment: value.comment,
      quoteNickname: value.nickname
    });
    document.querySelector("textarea[name=comment]").focus();
  }
  submit() {
    const { comment, nickname, email, site,quoteNickname, quoteComment} = this.state;
    const info = {
      comment,
      nickname,
      email,
      site,
      quoteNickname,
      quoteComment
    };
    this.props.submitComment(info)
  }
  render() {
    return (
      <div className={styles.comment}>
        <div className={styles.box_hd}>
          <span className={styles.title}>评论</span>
        </div>
        <form className={styles.box_bd}>
          <div className={styles.content_input}>
            {this.state.quoteNickname && (
              <blockquote className="quote">
                <span>引用 {this.state.quoteNickname} 的发言</span>
                {this.state.quoteComment}
              </blockquote>
            )}
            <textarea
              name="comment"
              className={styles.area}
              row="10"
              placeholder="只要你不骂我，你说啥都行~"
              value={this.state.comment}
              onChange={this.handleInputChange}
            ></textarea>
            <div className={styles.form_item}>
              <span className={styles.label}>
                您的昵称<i className={styles.star}>*</i>
              </span>
              <input
                type="text"
                name="nickname"
                value={this.state.nickname}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className={styles.form_item}>
              <span className={styles.label}>
                邮箱<i className={styles.star}>*</i>
              </span>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              ></input>
            </div>
            <div className={styles.form_item}>
              <span className={styles.label}>个人站点</span>
              <input
                type="text"
                name="site"
                value={this.state.site}
                onChange={this.handleInputChange}
              ></input>
            </div>
          </div>
          <button className={styles.submit} onClick={this.submit} type="button">
            发表
          </button>
        </form>
      </div>
    );
  }
}

export default Comment;
