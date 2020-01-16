import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';



import {postRequest} from "./utils/api";
import {postKeyValueRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import {initMenu} from "./utils/menus";
import 'font-awesome/css/font-awesome.min.css'

Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;



Vue.config.productionTip = false
Vue.use(ElementUI);
//全局导航守卫
router.beforeEach((to, from, next) => {
  // to 去哪 from 从哪来   next通过   类似于后端的过滤器

  if (to.path == '/') { //登录页放过
    next();
  }else {
    /*initMenu(router, store);
    next();*/
    if (window.sessionStorage.getItem("user")) {
      initMenu(router, store);
      next();
    }else{
      next('/?redirect='+to.path);  //没有登录重定向
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
