<template>
  <ValidationObserver v-slot="{ handleSubmit }">
  <div v-text="type" />
    <ValidationProvider
      vid="email"
      name="メールアドレス"
      rules="required|email"
      v-model="email"
      v-slot="validationState"
    >
      <FormInputWithError type="email" :state="validationState" v-model="email" />
    </ValidationProvider>
    <ValidationProvider
      vid="invalidEmail"
      name="メールアドレス"
      rules="required|email"
      v-model="invalidEmail"
      v-slot="validationState"
    >
      <FormInputWithError type="email" :state="validationState" v-model="invalidEmail" />
    </ValidationProvider>
    <ValidationProvider
      vid="password"
      name="パスワード"
      rules="required|min:8"
      v-model="password"
      v-slot="validationState"
    >
      <FormInputWithError type="password" :state="validationState" v-model="password" />
    </ValidationProvider>
    <button @click="handleSubmit(submit)">送信</button>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FormInputWithError from "@/components/form/FormInputWithError.vue";

export type TestType = {
  type: string;
};

@Component({
  components: {
    FormInputWithError
  }
})
export default class Child extends Vue {
  @Prop({
    type: String,
    default: "",
  })
  type!: TestType;

  email = "hoge@example.com";
  invalidEmail = "hogefuga";
  password = "";

  submit() {
    console.log(this.email, this.password);
  }
}
</script>
