import React, { Component } from "react";
import styles from "./index.module.scss";
class CommentList extends Component {
  constructor(props) {
    super(props)
    this.quote = this.quote.bind(this)
  }
  quote(ev,nickname, comment ) {
    const quoteInfo = {
      nickname,
      comment
    }
    this.props.hanleQuote(quoteInfo)
  }
  render() {
    return (
      <div className={styles.coment_list}>
        <span className={styles.comment_count}>留言(16)</span>
        {this.props.commentData.map((item) => (
          <div className={styles.comment_box} key={item.id}>
            <div className={styles.box_hd}>
              <span className={styles.user_name}>{item.nickname}</span>
            </div>
            <div className={styles.box_bd}>
              {item.quote && (
                <blockquote className='quote'>
                  <span>引用 {item.quote.nickname} 的发言</span>
                  {item.quote.comment}
                </blockquote>
              )}
              <p className={styles.comment_content}>{item.comment}</p>
            </div>
            <div className={styles.bottom}>
              <span className={styles.timestamp}>{item.createDate}</span>
              <span className={styles.reply} onClick={(ev) => {this.quote(ev, item.nickname, item.comment )}}>引用</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CommentList;
