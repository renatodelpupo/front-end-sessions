import { _ as __nuxt_component_0$1 } from "./TagFlag.851fd7d7.js";
import { d as defineComponent, av as _export_sfc, a as openBlock, b as createElementBlock, e as createBaseVNode, t as toDisplayString, m as createCommentVNode, F as Fragment, J as renderList, j as createBlock } from "./vendor.d7fe5d60.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    author: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: true },
    recordingUrl: { type: String, required: true },
    tags: { type: Array, required: false },
    title: { type: String, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "bg-zinc-800 flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 hover:outline hover:outline-2 hover:outline-blue-500 overflow-hidden relative rounded-lg text-slate-50" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "flex flex-col h-full justify-between p-6" };
const _hoisted_4 = { class: "text-2xl" };
const _hoisted_5 = ["href", "textContent"];
const _hoisted_6 = {
  key: 0,
  class: "text-lg"
};
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = {
  role: "list",
  class: "flex gap-2 mt-8"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_TagFlag = __nuxt_component_0$1;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("img", {
      alt: "",
      class: "block w-full",
      src: $props.image
    }, null, 8, _hoisted_2),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("div", null, [
        createBaseVNode("h2", _hoisted_4, [
          createBaseVNode("a", {
            class: "after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0",
            href: $props.recordingUrl,
            target: "_blank",
            textContent: toDisplayString($props.title)
          }, null, 8, _hoisted_5)
        ]),
        $props.author ? (openBlock(), createElementBlock("p", _hoisted_6, "by " + toDisplayString($props.author), 1)) : createCommentVNode("v-if", true),
        createBaseVNode("small", {
          class: "text-sm",
          textContent: toDisplayString($props.date)
        }, null, 8, _hoisted_7),
        createBaseVNode("p", {
          class: "mt-4 text-base whitespace-pre-line",
          textContent: toDisplayString((_a = $props.description) == null ? void 0 : _a.trim())
        }, null, 8, _hoisted_8)
      ]),
      createBaseVNode("div", _hoisted_9, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.tags, (tag) => {
          return openBlock(), createBlock(_component_TagFlag, {
            key: tag,
            label: tag,
            role: "listitem"
          }, null, 8, ["label"]);
        }), 128))
      ])
    ])
  ]);
}
_sfc_main.__file = "components/Card.vue";
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/renatodelpupo/Projects/team-sessions/components/Card.vue"]]);
export { __nuxt_component_0 as _ };
