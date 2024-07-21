import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/global.less'
Vue.config.productionTip = false

// 创建vue实例，将router、store配置到根实例中
// 把APP根组件渲染到#app节点中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
