import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import { request } from "../../utils/request";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicList: [],
      labelList: [],
      articleList: {},
      originList:[]
    };
    this.getAllData = this.getAllData.bind(this);
    this.filterTopic = this.filterTopic.bind(this);
    this.initData = this.initData.bind(this);
    this.handleAll = this.handleAll.bind(this);
  }
  handleArticle(articleList,item) {
    const { id, title, createTime } = item;
    const dateYM = createTime.match(/\d{4}-\d{2}/);
    const dateMD = createTime.match(/(?<=-)\d{2}-\d{2}/);
    const info = {
      id,
      title,
      dateMD,
    };
    if (articleList[dateYM]) {
      articleList[dateYM].push(info);
    } else {
      articleList[dateYM] = [];
      articleList[dateYM].push(info);
    }
    return articleList
  }
  handleAll(ev, data) {
    if (data.length > 0) {
      let articleList = {}
      data.forEach(item => this.handleArticle(articleList, item))
      this.setState({
        articleList
      })
    }
  }
  initData(data) {
    let topicList = {};
    let labelList = [];
    let articleList = {};
    if (data) {
      data.forEach((item) => {
        //
        const {labels, topic } = item;
        if (topicList[topic]) {
          topicList[topic] = topicList[topic] + 1;
        } else {
          topicList[topic] = 1;
        }
        const label = labels.split(",");
        label.forEach((label) => {
          !labelList.includes(label) && labelList.push(label);
        });
        articleList = this.handleArticle(articleList, item)
      });
    }
    this.setState({
      topicList,
      labelList,
      articleList,
    });
  }
  async getAllData() {
    const result = await request("/archives/all", "get");
    const data = result.data;
    this.setState({
      originList:data
    })
    this.initData(data)
  }
  filterTopic(ev, topic) {
    const filterArr = this.state.originList.filter(item => item.topic === topic)
    const articleList = {}
    filterArr.forEach(item => {
      this.handleArticle(articleList,item)
    })
    this.setState({
      articleList
    })
  }
  componentWillMount() {
    this.getAllData();
  }
  render() {
    const { topicList, labelList, articleList, originList } = this.state;
    return (
      <div>
        <div className={styles.box_main}>
          <div className={styles.box_hd}>
            <span className={`icon iconfont ${styles.icon_archive}`}>
              &#xe694;
            </span>
            &nbsp;文章归档(19)
          </div>
          <div className={styles.box_bd}>
            <div className="container-wrap">
              <div className={`col-side ${styles.col_side}`}>
                <div className={styles.topic_list}>
                  <ul>
                    <li className={styles.topic_item} onClick={(ev) => this.handleAll(ev,originList )}>
                      <span>全部</span>
                      <span>({Object.keys(topicList).length})</span>
                    </li>
                    {Object.keys(topicList).map((item) => (
                      <li className={styles.topic_item} key={item} onClick={(ev) => {
                        this.filterTopic(ev, item)
                      }}>
                        <span>{item}</span>
                        <span>({topicList[item]})</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.label_list}>
                  <h4>标签</h4>
                  <ul>
                    {labelList.map((label) => (
                      <li className={styles.label_item} key={label}>{label}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`col-main ${styles.col_main}`}>
                <div className={styles.article_list}>
                  {Object.keys(articleList).map((item) => (
                    <div className={styles.archives_month} key={item}>
                      <span className={styles.title}>
                        {item} / {articleList[item].length}篇文章
                      </span>
                      <ul>
                        {articleList[item].map((unit) => (
                          <li className={styles.article_item} key={unit.id}>
                            <NavLink
                              to={{
                                pathname: `/article/${unit.id}`,
                              }}
                            >
                              {unit.dateMD} {unit.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
