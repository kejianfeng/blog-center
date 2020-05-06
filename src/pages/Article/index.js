import React, { Component } from "react";
import styles from "./index.module.scss";
import { request } from "../../utils/request";
import ArticleCard from "../../components/ArticleCard/index";
import Person from "../../components/Person/index";

// import { Button } from 'antd';
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
    };
  }
  componentWillMount() {
    // console.log(3333)
    request("/article/articleList", "get").then((res) => {
      this.setState({
        articleList: res.data,
      });
    });
  }
  render() {
    return (
      <div className='container-wrap'>
        <div className="col-side mr20"><Person /></div>
        <div className="col-main">
          <div className="section">
            <div className={styles.content}>
              {this.state.articleList.map((item) => (
                <ArticleCard articleList={item} key={item.id}></ArticleCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
