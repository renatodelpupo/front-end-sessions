import { d as defineComponent, av as _export_sfc, a as openBlock, b as createElementBlock, t as toDisplayString } from "./vendor.d7fe5d60.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TagFlag",
  props: {
    label: {
      required: true,
      type: String
    }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["textContent"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: "bg-zinc-400 p-2 rounded text-zinc-900",
    textContent: toDisplayString($props.label)
  }, null, 8, _hoisted_1);
}
_sfc_main.__file = "components/TagFlag.vue";
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/renatodelpupo/Projects/team-sessions/components/TagFlag.vue"]]);
export { __nuxt_component_0 as _ };
