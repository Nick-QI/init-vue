import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as wx from 'weixin-js-sdk'
import '@/assets/css/index.less'

Vue.config.productionTip = false

// 全局路由跳转后监听
router.afterEach((to, from) => {
  // 判断是否为微信环境, 做微信签名
  const url = window.location.origin + to.fullPath
  console.log('单页面应用再次进行微信签名 ===> ', url, wx)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
