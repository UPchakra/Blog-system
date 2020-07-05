import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from "../components/Dashboard/dashboard"
import Blog from "../components/Blog/blog"
import Blogs from "../components/Blogs/blogs"

const routes=[
{
    component:Dashboard,
    name:"dashboard",
    path:"/dashboard"
},
{
	 component:Blog,
    name:"blog",
    path:"/blog"
},
{
	 component:Blogs,
    name:"blogs",
    path:"/blogs"
}
];
export default new VueRouter({
	routes
});