import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant' // Vant组件库加载
import './styles/global.less'
import 'vant/lib/index.css' // 全局样式加载
import 'amfe-flexible' // 自动设置rem基准值

Vue.config.productionTip = false
Vue.use(Vant) // 全局注册Vant组件
// 创建vue实例，将router、store配置到根实例中
// 把APP根组件渲染到#app节点中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
