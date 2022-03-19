// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

// --------------重写push|replace，()=>{},()=>{});解决promise报错问题
// 第一个参数：告诉原来的push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三个参数：失败回调
const originPush =VueRouter.prototype.push;
const originReplace =VueRouter.prototype.replace;
VueRouter.prototype.push =function (location,resolve,reject){
    if (resolve&&reject) {
        originPush.call(this,location,resolve,reject);
    } else {
        originPush.call(this,location,()=>{},()=>{});
    }
};
VueRouter.prototype.replace =function (location,resolve,reject){
    if (resolve&&reject) {
        originReplace.call(this,location,resolve,reject);
    } else {
        originReplace.call(this,location,()=>{},()=>{});
    }
};

// 配置路由
export default new VueRouter({
    routes:[
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    }
    ,
    {
        path:'/search/:keyword',
        component:Search,
        meta:{show:true},
        name:'search'
    }
    ,
    {
        path:'/login',
        component:Login,
        meta:{show:false}
    }
    ,
    {
        path:'/register',
        component:Register,
        meta:{show:false}
    }
    ,
    // 重定向，访问时立马定位到首页
    {
        path:'*',
        redirect:'/home'
    }
        
]
})