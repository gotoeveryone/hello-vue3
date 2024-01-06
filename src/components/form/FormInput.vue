
<template>
  <BFormInput
    :type="type"
    :value="value"
    @input="onInput"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
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

  onInput($event) {
    this.$emit('input', $event);
  }
}
</script>
