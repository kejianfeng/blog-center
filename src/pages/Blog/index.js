import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styles from "./index.module.scss";
import { request } from "../../utils/request";
import { withRouter} from "react-router-dom";
import BlogCard from '../../components/BlogCard'

const PAGE_LIMIT = 8
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloglist: [],
      curPage:1,
      totalPage: 0,
    }
    this.loadMore = this.loadMore.bind(this)
    this.getList = this.getList.bind(this)
  }
  getList() {
    const {curPage} = this.state
    request("/blog/bloglist", "get",{
      curPage,
      pageLimit: PAGE_LIMIT
    }).then(res => {
      this.setState({
        totalPage: Math.ceil(res.total/PAGE_LIMIT),
        bloglist: [...this.state.bloglist, ...res.data]
      });
    });
  }
  loadMore() {
    this.setState({curPage: this.state.curPage + 1}, () => {
      this.getList()
    })
  }
  componentDidMount() {
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
      <div className="container">
        <div className="section">
          <div className={styles.content}>
            <div className={styles.blog_wrap}>
              <div className={styles.blog_cover}>
                <img src="https://images.vrm.cn/jx/2020/05/24/myblog-bg.jpg" className={styles.cover_img} alt="."></img>
                <div className={styles.motto}>
                  <h2>烽芒</h2>
                  <p style={{"color": "#fff"}}>若能光芒四射 何必自甘沉沦</p>
                </div>
              </div>
              <div className={styles.blog_list}>
                {
                  this.state.bloglist.map(item => (
                    <BlogCard blog={item} isShowButton={true} key={item.id}></BlogCard>
                  ))
                }
              </div>
            </div>
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
    </ReactCSSTransitionGroup>
    );
  }
}

export default withRouter(Blog);
