import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import Person from "../../components/Person/index";
import styles from "./index.module.scss";
class About extends Component {
  render() {
    return (
  
            <div className={styles.box_main}>
        <div className="container-wrap">
          <div className="col-side">
            <Person></Person>
          </div>
          <ReactCSSTransitionGroup
            transitionName="animation1"
            transitionAppear={true} 
            transitionAppearTimeout={400}
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            <div className="col-main">
              <div className={styles.box_about}>
                <p className={styles.title}>
                  <span className={`icon iconfont ${styles.icon_about}`}>
                    &#xe621;
                  </span>
                  关于我
                </p>
                <div className={styles.intro}>
                  <p className="mt10 mb20">
                    柯剑烽，一名憨厚老实的茂名人~~,
                    2019年七月毕业于宇宙工大（广东工业大学)
                  </p>
                  <p className="mb20">
                    爱学习 爱玩 爱跳舞 我也有环游世界的梦想
                  </p>
                  <p className="mb20">
                    大二在师兄的指引下入门前端,一开始觉得很简单，然后...反正拼命学就保持学习就完事了，前端的世界太魔幻
                  </p>
                  <div className={styles.experience}>
                    <h4 className={`prefix mb30 ${styles.title}`}>在校经历</h4>
                    <ul className={styles.school_list}>
                      <li>大学时光短暂而快乐，虽然穷，但是真的记忆满满啊~~</li>
                      <li>进学生处，管理学生处公众号，平时协办点活动啥的</li>
                      <li>
                        进舞俱，跳舞玩耍、排舞演出、组织晚会，还认识了好多有着共同兴趣的小伙伴，妙啊，对了大二还做了个主席助理
                      </li>
                      <li>去教小孩子乐高，机器人编程</li>
                      ...
                    </ul>
                  </div>
                  <div className={styles.experience}>
                    <h4 className={`prefix mb30 ${styles.title}`}>工作经历</h4>
                    <ul className={styles.job_experience_list}>
                      <li className={styles.job_item}>
                        <h5 className={styles.company_name}>
                          广东万丈金数信息技术股份有限公司(2019.4 - 至今)
                        </h5>
                        <p className="mt10 mb20 fs-nm">web前端开发</p>
                        <ul className={styles.experience_list}>
                          <li>
                            51LACMS资讯系统开发及维护（
                            <a href="https://www.51.la">www.51.la</a>）
                          </li>
                          <li>
                            51LA统计产品维护（
                            <a href="https://www.51.la">web.51.la</a>）
                          </li>
                          <li>
                            51LA短链系统重构及维护
                            <a href="https://www.51.la">dwz.51.la</a>）
                          </li>
                          <li>公司相关管理后台开发</li>
                          <li>活动营销页面开发，主要为移动端</li>
                          ...
                        </ul>
                      </li>
                      <li className={styles.job_item}>
                        <h5 className={styles.company_name}>
                          广州旗风堂信息科技有限公司(2017.6 - 2017.9)
                        </h5>
                        <p className="mt10 mb20 fs-nm">web前端开发实习</p>
                        <ul className={styles.experience_list}>
                          <li>负责活动页面开发</li>
                          <li>场景广播应用</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </ReactCSSTransitionGroup>
        </div>
      </div>
      

    );
  }
}

export default About;
