import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./index.module.scss";
import { request } from "../../utils/request";
import Person from "../../components/Person/index";

// import {renderRoutes} from 'react-router-config';
class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceList: [],
    };
  }
  enter_detail(ev, id) {
    ev.preventDefault();
    // console.log('敖包相会八号西北', id)
    console.log(id);
    // this.props.history.push('/source/source-detail', {id:id})
    this.props.history.push({
      pathname: "/source/source-detail",
      search: `?id=${id}`,
    });
  }
  async componentWillMount() {
    const sourceList = (await request("/source/sourceList", "get")).data;
    this.setState({
      sourceList: sourceList,
    });
  }
  render() {
    return (


      <div className='container-wrap'>
        <div className="col-side mr20"><Person /></div>
        <div className="col-main">
        <div className="container">
        <div className="section">
          <div className={styles.content}>
            <div className={styles.source_list}>
              {this.state.sourceList.map((item) => (
                <div className={styles.source_card} key={item.id}>
                  <div className={styles.box_left}>
                    <div className={styles.thumbnail}>
                      <img src={item.sourceIcon} alt="#"></img>
                    </div>
                    <div className={styles.card_bd}>
                      <h4 className={styles.title}>{item.sourceName}</h4>
                      <p className={styles.intro}>{item.sourceIntro}</p>
                    </div>
                  </div>
                  <div
                    className={styles.link}
                    onClick={(ev) => {
                      this.enter_detail(ev, item.id);
                    }}
                  >
                    <i className="iconfont icon-qianwang-xiayibu"></i>
                  </div>
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

export default withRouter(Source);
