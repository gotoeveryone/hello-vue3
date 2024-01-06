import { createApp } from "vue";
import { router } from "@/router";
import VueSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import App from "./App.vue";
import ValidationObserver from "@/components/validation/ValidationObserver.vue";
import ValidationProvider from "@/components/validation/ValidationProvider.vue";
import { BootstrapVue, BootstrapVueIcons } from "./plugins/bootstrap-vue";
import { ValidationField, ValidationForm } from "./plugins/vee-validate";

createApp(App)
  .component("VueSelect", VueSelect)
  .component("ValidationObserver", ValidationObserver)
  .component("ValidationProvider", ValidationProvider)
  .component("ValidationField", ValidationField)
  .component("ValidationForm", ValidationForm)
  .use(router)
  .use(BootstrapVue)
  .use(BootstrapVueIcons)
  .mount("#app");
