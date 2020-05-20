import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import HeadBar from '../../components/HeadBar'
import { request } from "../../utils/request";
import styles from "./index.module.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitelist: [],
      queryVal:''
    };
    this.query = this.query.bind(this)
    this.queryInputChange = this.queryInputChange.bind(this)
  }
  async query() {
    const result = await request('/query/site', 'post', {
      key: this.state.queryVal
    })
    console.log(result)
  }
  queryInputChange(e) {
    this.setState({
      queryVal: e.target.value
    })
  }
  componentDidMount() {
    request("/home/sitelist", "get").then(res => {
      let typeArr=[],
          dataList = res.data;
      dataList && dataList.forEach(item => {
        !typeArr.includes(item.classify) && typeArr.push(item.classify)
      
      });
      const mapList = typeArr.map(type => {
        let obj = Object.create(null)
        obj.type = type
        obj.data = []
        dataList.forEach(item => {
          item.classify === type && obj.data.push(item)
        })
        return obj
      })
      this.setState({
        sitelist: mapList
      });
    });
  }
  render() {
    return (
      <ReactCSSTransitionGroup
      transitionName="animation1"
      transitionAppear={true} 
      transitionAppearTimeout={400}
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}
    >

      <div>
        <section className={styles.nav_search}>
          <HeadBar navBg="transparent"></HeadBar>
          <div className={styles.box_content}>
            <div>
              <h1>才華洋溢創作者分享的值得收藏的网站</h1>
              {/* <div className={styles.box_bd}>
                <div className={styles.search_form}>
                  <input type="text" className={styles.form_input} value={this.state.queryVal} onChange={(e) => this.queryInputChange(e)}/>
                  <span className={styles.form_btn} onClick={this.query}>立即搜索</span>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="lg-container">
          <div className="section pb50">
            {this.state.sitelist.map(list => (
              <div className={`${styles.content} mt20`} key={list.type}>
                <div className={`${styles.title} fs-lg`}>{list.type}</div>
                <ul className={styles.card_list}>
                  {list.data.map(item => (
                    <li className={styles.site_item} key={item.siteName}>
                      <a href={item.siteUrl} target="_blank" title={item.siteText}>
                        <span className={styles.site_pic}>
                          <img src={item.sitePic} alt="..." />
                        </span>
                        <span className={styles.site_name}>{item.siteName}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </ReactCSSTransitionGroup>
    );
  }
}

export default Home;
