import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import styles from "./index.module.scss";
import { request } from "../../utils/request";
import PicCard from '../../components/PicCard/index'

const PAGE_LIMIT = 2
class PicWorks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      column_1:[],
      column_2:[],
      column_3:[],
      curPage:1,
      totalPage: 0
    }
    this.loadMore = this.loadMore.bind(this)
    this.getList = this.getList.bind(this)
  }
  async getList() {
    const {column_1, column_2, column_3, curPage,} = this.state
    const listData = (await request("/picwork/picList", "get",  {
      curPage,
      pageLimit: PAGE_LIMIT
    })).data
    var i  = 0;
    const list_length = listData.length
    while(i < list_length) {
      this.setState({
        column_1: [...column_1,listData[i++]]
      })
      column_1.push(listData[i++])
      i < list_length && this.setState({
        column_2: [...column_2,listData[i++]]
      })
      i < list_length && this.setState({
        column_3: [...column_3,listData[i++]]
      })
    }
  }
  loadMore() {
    this.setState({curPage: this.state.curPage + 1}, () => {
      this.getList()
    })
  }
  async componentWillMount() {
    this.getList()
  }
  render() {
    const {curPage,totalPage} = this.state
    return (
      <ReactCSSTransitionGroup
      transitionName="animation2"
      transitionAppear={true} 
      transitionAppearTimeout={400}
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >
      <div className="lg-container">
        <div className="section">
          <div className={`${styles.content} border-ra4`}>
            <div className={styles.masonry}>
              <div className={styles.column}>
                {
                  this.state.column_1.map(item => (
                    <PicCard key={item.id} picWork={item}></PicCard>
                  ))
                }
              </div>
              <div className={`${styles.column} ml20 mr20`}>
              {
                  this.state.column_2.map(item => (
                    <PicCard key={item.id} picWork={item}></PicCard>
                  ))
                }
              </div>
              <div className={styles.column}>
              {
                  this.state.column_3.map(item => (
                    <PicCard key={item.id} picWork={item}></PicCard>
                  ))
                }
              </div>
            </div>
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
    </ReactCSSTransitionGroup>
    );
  }
}

export default PicWorks;
