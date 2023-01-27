import { _ as __nuxt_component_0$1 } from "./Card.785a00f5.js";
import { d as defineComponent, av as _export_sfc, a as openBlock, b as createElementBlock, F as Fragment, J as renderList, j as createBlock, x as mergeProps, q as resolveComponent, k as withCtx, e as createBaseVNode, l as createVNode } from "./vendor.d7fe5d60.js";
import "./TagFlag.851fd7d7.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardList",
  props: {
    cards: { type: Array, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  class: "flex flex-wrap justify-center gap-8",
  role: "list"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Card = __nuxt_component_0$1;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.cards, (card) => {
      return openBlock(), createBlock(_component_Card, mergeProps({
        class: "w-96",
        key: card.title,
        role: "listitem"
      }, card), null, 16);
    }), 128))
  ]);
}
_sfc_main$1.__file = "components/CardList.vue";
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/renatodelpupo/Projects/team-sessions/components/CardList.vue"]]);
const _sfc_main = {};
const _hoisted_1 = {
  class: "p-8 w-fit",
  role: "list"
};
function _sfc_render(_ctx, _cache) {
  const _component_CardList = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_CardList, { cards: [
          {
            author: "Renato DelPupo",
            date: "19/10/2021",
            description: `
              Topics:
              - Present JavaScript and general web development terms
              - Short explanation about each term
              - Examples of use
            `,
            image: "https://via.placeholder.com/320x180.png",
            recordingUrl: "#",
            tags: ["JavaScript", "Web"],
            title: "JavaScript Recall"
          },
          {
            author: "Renato DelPupo",
            date: "08/12/2021",
            description: `
              Topics:
              - How simple is create a Telegram bot
              - Bot Father, Telegram API
              - Telegraf package
            `,
            image: "https://via.placeholder.com/320x180.png",
            recordingUrl: "#",
            tags: ["Bot", "JavaScript", "Node"],
            title: "Telegram Bot with Node.js"
          }
        ] }, null, 8, ["cards"])
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/CardList.story.vue";
var CardList_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/renatodelpupo/Projects/team-sessions/components/CardList.story.vue"]]);
export { CardList_story as default };
