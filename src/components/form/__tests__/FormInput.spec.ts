import { shallowMount } from "@vue/test-utils";
import Component from "@/components/form/FormInput.vue";

const BFormInputStub = {
  props: ["type", "value"],
  template: `<input :type="type" :value="value" @input="$event => $emit('input', $event)" />`
}

const createWrapper = () => shallowMount(Component, {
  global: {
    stubs: {
      BFormInput: BFormInputStub
    }
  }
});

describe("Home", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  describe("値入力", () => {
    it("値変更で emit がコールされること", async () => {
      const wrapper = createWrapper();
      wrapper.findComponent(BFormInputStub).vm.$emit("input", "test");
      expect(wrapper.emitted()["input"][0][0]).toBe("test");
    });
  });
});
