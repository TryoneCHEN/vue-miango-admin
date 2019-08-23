import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './mock.js' 
Vue.use(ElementUI);
import router from './routes'
Vue.config.productionTip = false
import mixin from './mixin'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
