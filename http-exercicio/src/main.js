import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import './plugins/bootstrap-vue'
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

var firebaseConfig = {
  apiKey: "AIzaSyB7_MPqjz1CZ8qGuKd0C63XkZTTnjPHIDs",
  authDomain: "curso-vue-wauth.firebaseapp.com",
  databaseURL: "https://curso-vue-wauth.firebaseio.com",
  projectId: "curso-vue-wauth",
  storageBucket: "curso-vue-wauth.appspot.com",
  messagingSenderId: "348281975419",
  appId: "1:348281975419:web:9ee6469bf74af5e8cde8de",
  measurementId: "G-YHCJCR47SE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
