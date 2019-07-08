import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

// 全局范围的扩大仅可直接嵌套在外部模块中或环境模块声明中。ts(2669)
declare global {
  interface Window {
    test: string;
    testFn(name: string, address?: string): string;
    [propName: string]: any; // 索引签名跳过检查
  }
}

window.test = 'test'; // 添加全局方法
window.test2 = 1;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
// https://m.ctrip.com/html5/?sourceid=1572&allianceid=20640&sid=455414 携程列表页
// https://segmentfault.com/a/1190000011744210?utm_source=tuicool&utm_medium=referral vue + typescript 项目起手式
// https://segmentfault.com/a/1190000011878086
// https://cloud.tencent.com/developer/article/1441658
