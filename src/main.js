// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "./assets/css/common.css"
import 'babel-polyfill';
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()
Vue.use(MintUI)
Vue.config.productionTip = false;
const vConsole = new VConsole(); // 不使用的时候，可以将这句屏蔽掉；
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



// Vue.prototype.webScoket = function(){
//     window.WebSocket = window.WebSocket || window.MozWebSocket;
//     new WebSocket("ws://127.0.0.1:9000", "echo-protocol");
// }




// hybridApp() {
//   let that = this;
//   window.WebSocket = window.WebSocket || window.MozWebSocket;
//   this.websocket = new WebSocket("ws://127.0.0.1:9000", "echo-protocol");

//   this.websocket.onopen = function() {
//     //连接客户端触发的函数
//     console.log("打开成功");
//   };
//   if (this.websocket.readyState != "1") {
//     that.openKey = true;
//   }
//   this.websocket.onerror = function() {
//     //链接失败就打开重新下载的弹窗
//     console.log("链接失败");
    
//   };
// },
