import React, { Component } from "react";
import styles from "./index.module.scss";
// import cloneDeep from 'lodash/cloneDeep'

class PicCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ...this.props.picWork
        }
        this.addLike = this.addLike.bind(this)

    }
    addLike(index) {
      this.setState({
        likeSum: this.state.likeSum + 1
      })
    }
    render() {
        const {picText, labels, picUrl, likeSum} = this.state
        return (
            <div className={styles.item}>
                      <img src={picUrl} alt="."/>
                      <div className={`${styles.mask} hide`}>
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
                        <div className={styles.like} onClick={this.addLike}>
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