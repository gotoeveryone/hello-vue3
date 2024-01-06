<template>
  <ValidationObserver v-slot="{ handleSubmit }">
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
    <AppButton @click="handleSubmit(submit)">送信</AppButton>
  </ValidationObserver>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppButton from "@/components/form/AppButton.vue";
import FormInputWithError from "@/components/form/FormInputWithError.vue";

@Component({
  components: {
    AppButton,
    FormInputWithError
  }
})
export default class Form extends Vue {
  email = "hoge@example.com";
  invalidEmail = "hogefuga";
  password = "";

  submit() {
    console.log(this.email, this.password);
  }
}
</script>
