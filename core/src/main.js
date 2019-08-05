import Vue from 'vue';
import App from './App.vue';
import router from './router';

import rtdbPlugin from 'vuefire';
Vue.config.productionTip = false;
Vue.use(rtdbPlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

