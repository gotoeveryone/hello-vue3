<template>
  <BButton>ほげほげ</BButton>
  <VueSelect
    :value="value"
    :options="options"
    label="text"
    class="corporation-select-input"
    @change="onChangeSelect"
  />
  <BNavbar>
    <BNavbarBrand href="#">Navbar</BNavbarBrand>
    <BNavbarNav>
      <BNavItem to="/form">Link</BNavItem>
      <BNavItem href="#" disabled>Disabled</BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({
    type: String,
    default: "",
  })
  msg!: string;

  value = 1;

  get options() {
    return [
      { value: 1, text: 'test1' },
      { value: 2, text: 'test2' },
      { value: 3, text: 'test3' },
    ]
  }

  onChangeSelect($event) {
    console.log($event);
    this.$emit('change', $event);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
