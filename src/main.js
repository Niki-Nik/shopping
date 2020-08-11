import Vue from "vue";
import App from "./App.vue";
import Darkmode from "@/components/Darkmode";
import vuetify from "@/plugins/vuetify";
import ColorText from "@/components/ColorText";

Vue.component("Darkmode", Darkmode);
Vue.component("ColorText", ColorText);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
