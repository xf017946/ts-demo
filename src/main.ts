import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
// Vue.prototype.$toast = (): void => {
//   console.log('toast');
// };

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
