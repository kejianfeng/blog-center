import React, { Component } from "react";
import styles from "./index.module.scss";
// import { request } from "../../utils/request";
class SourceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   sourceList: []
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className={styles.content}>
              <div className={styles.detail_wrap}>
                <section>
                <div className={styles.detail_hd}>
                    <h3>
                        <b>vue资源</b>
                    </h3>
                </div>
                <div className={styles.detail_bd}>
                    <div className={styles.detail_cover}>
                        <img src="https://www.niudana.com/uploadfile/201611/20/155400381.png" alt="." className={styles.bg_img}></img>
                        <img src="https://www.niudana.com/uploadfile/201611/20/155400381.png" alt="." className={styles.foucus_img}></img>
                    </div>
                    <div className={styles.detail_intro}>
                        <div className={styles.item}>
                            <span className={styles.item_hd}>介绍:</span>
                            <span className={styles.item_bd}>Adobe旗下的设计师交流平台，来自世界各地的设计师在这里分享自己的作品。</span>
                        </div>
                        <div className={styles.item}>
                             <span className={styles.item_hd}>标签:</span>
                             <span className={styles.item_bd}>
                                 <b>前端</b>
                                 <b>vue</b>
                             </span>
                        </div>
                        <div className={styles.item}>
                             <span className={styles.item_hd}>链接:</span>
                             <span className={styles.item_bd}>12255336</span>
                        </div>
                        <div className={styles.item}>
                             <span className={styles.item_hd}>密码:</span>
                             <span className={styles.item_bd}>12255336</span>
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
                    <img src={require('../../../assets/images/shoot.png')} alt="."></img>
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
