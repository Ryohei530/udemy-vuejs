import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-http-83e6e/databases/(default)/documents";

const interceptorsRequest = axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }   
);

axios.interceptors.request.eject(interceptorsRequest);

new Vue({
  render: h => h(App),
}).$mount('#app');
