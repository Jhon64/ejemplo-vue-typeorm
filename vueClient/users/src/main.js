import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";
Vue.config.productionTip = false;

import vuetify from "@/plugins/vuetify"; // path to vuetify export

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
