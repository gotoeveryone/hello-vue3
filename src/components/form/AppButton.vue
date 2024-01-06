<template>
  <!-- eslint-disable vue/no-deprecated-dollar-listeners-api -->
  <BButton v-on="$listeners">
    <slot />
  </BButton>
  <!-- eslint-enable -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppButton extends Vue {
  @Prop({
    type: String,
    default: "",
  })
  label!: string;
}
</script>
