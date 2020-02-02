import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
import Loading from '../components/Loading/index.js'

const routerConfig = [
	{
		name: 'home',
		path: '/',
		exact: true,
		component:  Loadable({
			loader: () => import('../pages/Home/index.js'),
			loading: Loading,
			delay:300
		}),
	},
	{
		name: 'article',
		path: '/article',
		exact:true,
		component:  Loadable({
			loader: () => import('../pages/Article/index.js'),
			loading: Loading,
			delay:300
		})
	},
	{
		name: 'article_detail',
		path: '/article/article-detail',
		// exact:true,
		component:  Loadable({
			loader: () => import('../pages/Article/Detail/index'),
			loading: Loading,
			delay:300
		})
	},
	{
		name: 'blog',
		path: '/blog',
		exact: true,
		component:  Loadable({
			loader: () => import('../pages/Blog/index.js'),
			loading: Loading,
			delay:300
		})
	},
	{
		name: 'blog',
		path: '/blog/blog-detail',
		component:  Loadable({
			loader: () => import('../pages/Blog/Detail/index.js'),
			loading: Loading,
			delay:300
		})
	},
	{
		name: 'pic-works',
		path: '/pic-works',
		component:  Loadable({
			loader: () => import('../pages/PicWorks/index.js'),
			loading: Loading,
			delay:300
		})
	},
	{
		name: 'source',
		path: '/source',
		exact:true,
		component:  Loadable({
			loader: () => import('../pages/Source/index.js'),
			loading: Loading,
			delay:300
		})
	},
	{
		name: 'source_detail',
		path: '/source/source-detail',
		// exact:true,
		component:  Loadable({
			loader: () => import('../pages/Source/Detail/index'),
			loading: Loading,
			delay:300
		})
	},
	{
		name: 'message',
		path: '/message',
		component:  Loadable({
			loader: () => import('../pages/Message/index.js'),
			loading: Loading,
			delay:300
		})
	},
	{
		name: 'about',
		path: '/about',
		component:  Loadable({
			loader: () => import('../pages/About/index.js'),
			loading: Loading,
			delay:300
		})
	}
]

export default routerConfig
