import { mount, flushPromises } from "@vue/test-utils";
import Component from "@/components/Home.vue";

const VueSelectStub = {
  template: `<select :value="value" @change="$emit('change', $event)"><option v-for="option in options" :key="option.value" v-text="option.text" :value="option.value" /></select>`,
  props: ["options", "value"],
};

const createWrapper = (msg: string) => {
  return mount(Component, {
    props: {
      msg,
    },
    global: {
      stubs: {
        BButton: true,
        BNavbar: true,
        BNavbarBrand: true,
        BNavbarNav: true,
        BNavItem: true,
        VueSelect: VueSelectStub,
      },
    },
  });
};

describe("Home", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  describe("マウント時", () => {
    it("option が3件表示されていること", () => {
      const wrapper = createWrapper("hogefuga");
      expect(wrapper.findAll("option")).toHaveLength(3);
    });
    it("値変更で emit がコールされること", async () => {
      const wrapper = createWrapper("hogefuga");
      const select = wrapper.find("select");
      expect(select.element.value).toBe("1");
      select.element.value = "2";
      await select.trigger("change");
      await flushPromises();
      expect(wrapper.find("select").element.value).toBe("2");
    });
  });
});
