import {reqCategoryList} from "@/api";
// home模块小仓库
// state:仓库存储数据的地方
const state={
    // state中的数据默认初始值别瞎写，服务器返回对象，服务器返回数组。[根据接口返回值初始化的]
    categoryList:[],
};
// mutations:修改state的唯一手段
const mutations={
    CATEGORYLIST(state,categoryList){
            state.categoryList=categoryList;
    }
};
// actions:处理actions,可以书写自己的业务逻辑，也可以处理异步
const actions={
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
       const result=await reqCategoryList();
       if(result.code==200){
           commit("CATEGORYLIST",result.data);
       }
    }
};
// getters:理解为计算属性，用于简化仓库数据，让组件获取仓库数据更加方便
const getters={};
export default {
    state,
    mutations,
    actions,
    getters
}