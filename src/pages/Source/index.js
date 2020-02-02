import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import styles from "./index.module.scss";
import { request } from "../../utils/request";
// import {renderRoutes} from 'react-router-config';
class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceList: []
    };
    // this.enter_detail = this.enter_detail.bind(this)
  }
  enter_detail(ev,id) {
    ev.preventDefault();
    // console.log('敖包相会八号西北', id)
    console.log(id)
    // this.props.history.push('/source/source-detail', {id:id})
    this.props.history.push({
      pathname:'/source/source-detail',
      search: `?id=${id}`
    })
  }
  async componentWillMount() {
    const sourceList = (await request("/source/sourcelist", "get")).data;
    console.log(sourceList);
    this.setState({
      sourceList: sourceList
    });
  }
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className={styles.content}>
            <div className={styles.source_list}>
              {this.state.sourceList.map(item => (
                <div className={styles.source_card} key={item.id}>
                  <div className={styles.thumbnail}>
                    <img src={item.thumbnail} alt="#"></img>
                  </div>
                  <div className={styles.card_bd}>
                    <h4 className={styles.title}>{item.title}</h4>
                    <p className={styles.intro}>{item.intro}</p>
                  </div>
                  <div className={styles.link} onClick={(ev) => {this.enter_detail(ev, item.id)}}>
                    <i className="iconfont icon-qianwang-xiayibu"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Source);
