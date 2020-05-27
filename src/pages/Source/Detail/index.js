import React, { Component } from "react";
import styles from "./index.module.scss";
import qs from "qs";
import { request } from "../../../utils/request";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import message from "../../../components/Message";
// import { request } from "../../utils/request";
class SourceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: {},
    };
  }
  async componentDidMount() {
    // request('/souce/detail')
    const search = this.props.history.location.search;
    // console.log('阿盖好', )
    const result = await request(
      "/source/detail",
      "post",
      qs.parse(search.replace(/\?/, ""))
    );
    result.code === 200 &&
      this.setState({
        source: result.data,
      });
    console.log(result);
  }
  render() {
    const {
      sourceIcon,
      sourceName,
      sourceIntro,
      sourceLink,
      sourcePassword,
      sourceShoot,
      sourceLabels,
    } = this.state.source;
    return (
      <div className="container">
        <div className="section">
          <div className={styles.content}>
            <div className={styles.detail_wrap}>
              <section>
                <div className={styles.detail_hd}>
                  <h3>
                    <b>{sourceName}</b>
                  </h3>
                </div>
                <div className={styles.detail_bd}>
                  <div className={styles.detail_cover}>
                    <img
                      src={sourceIcon}
                      alt="."
                      className={styles.bg_img}
                    ></img>
                    <img
                      src={sourceIcon}
                      alt="."
                      className={styles.foucus_img}
                    ></img>
                  </div>
                  <div className={styles.detail_intro}>
                    <div className={styles.item}>
                      <span className={styles.item_hd}>介绍:</span>
                      <span className={styles.item_bd}>{sourceIntro}</span>
                    </div>
                    <div className={styles.item}>
                      <span className={styles.item_hd}>标签:</span>
                      <span className={styles.item_bd}>
                        {sourceLabels &&
                          sourceLabels
                            .split(",")
                            .map((label) => <b key={label}>{label}</b>)}
                      </span>
                    </div>
                    <div className={styles.item}>
                      <span className={styles.item_hd}>链接:</span>
                      <span className={styles.item_bd}>{sourceLink}</span>
                      <CopyToClipboard text={sourceLink} onCopy={() => message.success('链接复制成功')}>
                        <span className={styles.copy}>复制</span>
                      </CopyToClipboard>
                    </div>
                    <div className={styles.item}>
                      <span className={styles.item_hd}>密码:</span>
                      <span className={styles.item_bd}>{sourcePassword}</span>
                      <CopyToClipboard text={sourcePassword} onCopy={() => message.success('密码复制成功')}>
                        <span className={styles.copy}>复制</span>
                      </CopyToClipboard>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <div className={styles.detail_hd}>
                  <h3>
                    <b>资源截图</b>
                  </h3>
                </div>
                <div className={styles.shoot}>
                  <div className={styles.shoot_wrap}>
                    <img src={sourceShoot} alt="."></img>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SourceDetail;
