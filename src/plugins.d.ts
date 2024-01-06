import { BvModal, BvToast } from "bootstrap-vue";
import ValidationObserver from "@/components/validation/ValidationObserver.vue";
import ValidationProvider from "@/components/validation/ValidationProvider.vue";
import { ValidationField, ValidationForm } from "./plugins/vee-validate";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    readonly $bvModal: BvModal;
    readonly $bvToast: BvToast;
  }
  export interface GlobalComponents {
    ValidationField: typeof ValidationField;
    ValidationForm: typeof ValidationForm;
    ValidationObserver: typeof ValidationObserver;
    ValidationProvider: typeof ValidationProvider;
  }
}
