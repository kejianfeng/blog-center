import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styles from "./index.module.scss";
import { request } from "../../utils/request";
import ArticleCard from "../../components/ArticleCard/index";
import Person from "../../components/Person/index";

const PAGE_LIMIT = 8
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: [],
      curPage:1,
      totalPage: 0,
    };
    this.loadMore = this.loadMore.bind(this)
    this.getList = this.getList.bind(this)
  }
  getList() {
    const {curPage} = this.state
    request("/article/articleList", "get", {
      curPage,
      pageLimit: PAGE_LIMIT
    }).then((res) => {
      this.setState({
        totalPage: Math.ceil(res.total/PAGE_LIMIT),
        articleList: [...this.state.articleList, ...res.data]
      })
    });
  }
  loadMore() {
    this.setState({curPage: this.state.curPage + 1}, () => {
      this.getList()
    })
  }
  componentWillMount() {
    this.getList()
  }
  render() {
    const {curPage,totalPage} = this.state
    return (
      <ReactCSSTransitionGroup
      transitionName="animation1"
      transitionAppear={true} 
      transitionAppearTimeout={400}
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      <div className='container-wrap'>
        <div className="col-side mr20 mt20"><Person /></div>
        <div className="col-main">
          <div className="section">
            <div className={styles.content}>
              {this.state.articleList.map((item) => (
                <ArticleCard articleList={item} key={item.id}></ArticleCard>
              ))}
              <div className="load-more">
         {
            curPage < totalPage&& (
            <span onClick={this.loadMore}>加载更多<i className="icon iconfont">&#xe612;</i></span>
           )
         }
          </div>
            </div>
          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
    );
  }
}

export default Article;
