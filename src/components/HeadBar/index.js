import React, {Component} from 'react'
import './index.scss'
import { Router, Route, NavLink ,  } from 'react-router-dom'
class HeadBar extends Component {
	render () {
		return (
				<nav className="head-bar">
					<div className="logo">
              <NavLink  to='/' className="fs-nm">Jamki</NavLink >
					</div>
					<div className="menu">
							<ul className="menu-list">
								<li className="menu-item"><NavLink  activeClassName="active-item" to='/article'>文章</NavLink ></li>
								<li className="menu-item"><NavLink  activeClassName="active-item" to='/blog'>行博</NavLink ></li>
								<li className="menu-item"><NavLink  activeClassName="active-item" to='/pic-works'>图片作品</NavLink ></li>
								<li className="menu-item"><NavLink  activeClassName="active-item" to='/source'>资源分享</NavLink ></li>
								<li className="menu-item"><NavLink  activeClassName="active-item" to='/message'>留言</NavLink ></li>
								<li className="menu-item"><NavLink  activeClassName="active-item" to='/about'>关于</NavLink ></li>
							</ul>
					</div>
				</nav>
			)
		
	}
}
export default HeadBar