// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import {
  createRouter
} from './router'
import './plugins/element.js'
// import './service/websocket.js'

/* eslint-disable no-new */
export function createApp() {
  const router = createRouter();
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    router,
    render: h => h(App)
  })

  return {
    app,
    router
  }
}