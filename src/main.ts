import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
// https://m.ctrip.com/html5/?sourceid=1572&allianceid=20640&sid=455414 携程列表页
// https://segmentfault.com/a/1190000011744210?utm_source=tuicool&utm_medium=referral vue + typescript 项目起手式
