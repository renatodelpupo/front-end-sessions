import { _ as __nuxt_component_0 } from "./Card.785a00f5.js";
import { av as _export_sfc, q as resolveComponent, a as openBlock, j as createBlock, k as withCtx, e as createBaseVNode, l as createVNode } from "./vendor.d7fe5d60.js";
import "./TagFlag.851fd7d7.js";
const _sfc_main = {};
const _hoisted_1 = { class: "p-8 w-fit" };
function _sfc_render(_ctx, _cache) {
  const _component_Card = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_Card, {
          author: "Renato DelPupo",
          date: "19/10/2021",
          description: "\n          Topics:\n          - Present JavaScript and general web development terms\n          - Short explanation about each term\n          - Examples of use\n        ",
          image: "https://via.placeholder.com/320x180.png",
          recordingUrl: "#",
          tags: ["JavaScript", "Web"],
          title: "JavaScript Recall"
        })
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/Card.story.vue";
var Card_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/renatodelpupo/Projects/team-sessions/components/Card.story.vue"]]);
export { Card_story as default };
