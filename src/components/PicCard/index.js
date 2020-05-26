import React, { Component } from "react";
import styles from "./index.module.scss";
import Zmage from 'react-zmage'
import { request } from "../../utils/request";

class PicCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ...this.props.picWork,
          isHideClick: false
        }
        this.addLike = this.addLike.bind(this)

    }
    addLike(e, id) {
      this.setState({
        likeSum: this.state.likeSum + 1,
        isHideClick: true
      })
      request('/picwork/like', 'post', {
        id
      })
    }
    render() {
        const {id, picText, labels, picUrl, likeSum, isHideClick} = this.state
        return (
            <div className={styles.item}>
                      <Zmage src={picUrl} alt="."/>
                      <div className={`${styles.mask} hide`}>
                      <span className={styles.jump} onClick={() => Zmage.browsing({ src:picUrl })}>查看大图</span>
                        <p className={styles.intro}>
                          {picText}
                          <span className={labels ? '' : 'hide'}>#</span>
                          {
                            labels.trim().split(',').map((label, index) => (
                              label && <span key={label}>{label}#</span>
                              )
                            )
                          }
                        </p>
                        <div className={styles.like} onClick={(e) => this.addLike(e, id)} style={{'pointerEvents': isHideClick ? 'none' : 'auto'}}>
                          <i className={`${styles.icon} iconfont icon-dianzan1`}></i>
                          {
                            !!likeSum && (
                              <span className={styles.like_num}>{likeSum}</span>
                            )
                          }
                        </div>
                      </div>
                    </div>
        )
    }
}

export default PicCard