import React, { Component } from "react";
import styles from  "./index.module.scss";
import { NavLink} from "react-router-dom";
class HeadBar extends Component {
  render() {
    return (
      <nav
        className={styles.head_bar}
        style={{ background: this.props.navBg || "#132332" }}
      >
        <NavLink to="/" className={`${styles.logo} ml20`}>
          <img
            src={require("../../assets/images/Jamki-logo.png")}
            alt="."
          ></img>
        </NavLink>
        <div className={styles.menu}>
          <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
              <NavLink to="/">
                首页
              </NavLink>
            </li>
            <li className={styles.menu_item}>
              <NavLink activeClassName={styles.active_item} to="/article">
                文章
              </NavLink>
            </li>
            <li className={styles.menu_item}>
              <NavLink activeClassName={styles.active_item} to="/blog">
                行博
              </NavLink>
            </li>
            <li className={styles.menu_item}>
              <NavLink activeClassName={styles.active_item} to="/archives">
                归档
              </NavLink>
            </li>
            <li className={styles.menu_item}>
              <NavLink activeClassName={styles.active_item} to="/pic-works">
                图片作品
              </NavLink>
            </li>
            <li className={styles.menu_item}>
              <NavLink activeClassName={styles.active_item} to="/source">
                资源分享
              </NavLink>
            </li>
            <li className={styles.menu_item}>
              <NavLink activeClassName={styles.active_item} to="/message">
                留言
              </NavLink>
            </li>
            <li className={styles.menu_item}>
              <NavLink activeClassName={styles.active_item} to="/about">
                关于
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default HeadBar;
