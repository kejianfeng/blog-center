import React, { Component } from "react";
import ShardCard from "../../components/ShareCard/index";
import HeadBar from '../../components/HeadBar'
import { request } from "../../utils/request";
import styles from "./index.module.scss";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sitelist: []
    };
  }
  componentDidMount() {
    request("/home/sitelist", "get").then(res => {
      let typeArr=[],
          dataList = res.data;
      dataList && dataList.forEach(item => {
        !typeArr.includes(item.classify) && typeArr.push(item.classify)
      
      });
      console.log('分类数组', typeArr)
      const mapList = typeArr.map(type => {
        let obj = Object.create(null)
        obj.type = type
        obj.data = []
        dataList.forEach(item => {
          item.classify === type && obj.data.push(item)
        })
        console.log('新对象', obj)
        return obj
      })
      console.log(mapList)
      this.setState({
        sitelist: mapList
      });
    });
  }
  render() {
    return (
      <div>
        <section className={styles.nav_search}>
          <HeadBar navBg="transparent"></HeadBar>
          <div className={styles.box_content}>
            <div>
              <h1>才華洋溢創作者分享的值得收藏的网站</h1>
              <div className={styles.box_bd}>
                <div className={styles.search_form}>
                  <input type="text" className={styles.form_input} />
                  <span className={styles.form_btn}>立即搜索</span>
                </div>
              </div>
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
                    <li className={styles.site_item} key={item.site_name}>
                      <a href={item.site_url} target="_blank" title={item.site_text}>
                        <span className={styles.site_pic}>
                          <img src={item.site_pic} alt="..." />
                        </span>
                        <span className={styles.site_name}>{item.site_name}</span>
                      </a>
                    </li>
                    // <ShardCard cardData={item} key={item.id}></ShardCard>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
