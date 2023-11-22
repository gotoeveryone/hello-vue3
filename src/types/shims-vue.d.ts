declare module "vue" {
  import { CompatVue } from "vue";
  const Vue: CompatVue;
  export default Vue;
  // eslint-disable-next-line vue/prefer-import-from-vue
  export * from "@vue/runtime-dom";
  export const configureCompat: CompatVue["configureCompat"];
  export {};
}

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent;
  export default component;
}
