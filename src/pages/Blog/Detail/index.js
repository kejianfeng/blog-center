import React, { Component } from "react";
import styles from "./index.module.scss";
import { withRouter} from "react-router-dom";
import BlogCard from '../../../components/BlogCard'


// import { request } from "../../utils/request";
class BlogDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
}
  render() {
    const {blogData} = this.props.location.state
    return (
      <div className="container">
        <div className="section">
          <div className={styles.content}>
              <BlogCard blog={blogData}></BlogCard>
          </div>
        </div>
      </div>  
    );
  }
}

export default withRouter(BlogDetail);
