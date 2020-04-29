import React, { Component } from "react";
import styles from './index.module.scss'
class Comment extends Component {
  render() {
    return (
      <div className={styles.comment}>
        <div className={styles.box_hd}>
          <span className={styles.title}>评论</span>
        </div>
        <form className={styles.box_bd}>
          <div className={styles.content_input}>
            <textarea name='comment' className={styles.area} row="10" placeholder="只要你不骂我，你说啥都行~"></textarea>
            <div className={styles.form_item}>
              <span className={styles.label}>您的昵称<i className={styles.star}>*</i></span>
              <input type="text" name='nickName'></input>
            </div>
            <div className={styles.form_item}>
              <span className={styles.label}>邮箱<i className={styles.star}>*</i></span>
              <input type="text" name='email'></input>
            </div>
            <div className={styles.form_item}>
              <span className={styles.label}>个人站点</span>
              <input type="text" name='site'></input>
            </div>
          </div>
          <button className={styles.submit}>发表</button>
        </form>
      </div>  
    );
  }
}

export default Comment;
