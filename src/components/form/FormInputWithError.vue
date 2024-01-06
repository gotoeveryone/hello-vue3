<template>
  <FormInput type="email" :value="value" @input="onInput" />
  <div v-if="state.errors" class="text-danger" v-text="state.errors[0]" />
</template>

<script lang="ts">
import type { PropType } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import FormInput from "@/components/form/FormInput.vue";
import { ValidationStateType } from "@/types/validation";

@Component({
  components: {
    FormInput,
  }
})
export default class FormInputWithError extends Vue {
  @Prop({
    type: String,
    default: "text",
  })
  type!: string;

  @Prop({
    type: String,
    default: "",
  })
  value!: string;

  @Prop({
    type: Object as PropType<ValidationStateType>,
    required: true,
  })
  state!: ValidationStateType;

  onInput($event) {
    this.$emit('input', $event);
  }
}
</script>
