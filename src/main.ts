import { createApp } from "vue";
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "./plugins/bootstrap-vue";

createApp(App)
  .component("VueSelect", VueSelect)
  .use(BootstrapVue)
  .use(BootstrapVueIcons)
  .mount("#app");
