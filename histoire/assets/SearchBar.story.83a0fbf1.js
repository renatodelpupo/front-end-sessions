import { av as _export_sfc, r as ref, c as computed, a as openBlock, b as createElementBlock, M as withDirectives, a5 as vModelText, e as createBaseVNode, F as Fragment, J as renderList, t as toDisplayString, m as createCommentVNode, q as resolveComponent, j as createBlock, k as withCtx, l as createVNode } from "./vendor.d7fe5d60.js";
const _sfc_main$1 = {
  __name: "SearchBar",
  props: {
    trainingsList: {
      required: true,
      type: Array
    }
  },
  emits: ["search"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const filterTags = ref([]);
    const showSuggestions = ref(false);
    const text = ref("");
    const trainingsTags = computed(() => {
      return [...new Set(props.trainingsList.map((training) => training.tags).flat().sort())];
    });
    const trainingsTagsMatching = computed(() => {
      if (!text)
        return [];
      return trainingsTags.value.filter((tag) => tag.match(new RegExp(text.value, "gi")));
    });
    const updateSearchTerm = (term, suggestionsVisibility) => {
      emit("search", term);
      showSuggestions.value = term ? suggestionsVisibility : false;
      text.value = term;
    };
    const __returned__ = { emit, props, filterTags, showSuggestions, text, trainingsTags, trainingsTagsMatching, updateSearchTerm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
const _hoisted_1$1 = { class: "flex flex-col gap-2 relative" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("label", {
  class: "text-slate-50",
  for: "search"
}, "Filter by any term", -1);
const _hoisted_3 = ["textContent"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _hoisted_2,
    withDirectives(createBaseVNode("input", {
      class: "block p-2 rounded-md w-full",
      id: "search",
      name: "search",
      placeholder: "Type here...",
      type: "text",
      onInput: _cache[0] || (_cache[0] = ($event) => $setup.updateSearchTerm($event.target.value, true)),
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.text = $event)
    }, null, 544), [
      [vModelText, $setup.text]
    ]),
    $setup.showSuggestions ? (openBlock(), createElementBlock("ul", {
      key: 0,
      class: "absolute bg-slate-50 flex flex-col gap-1 p-0 top-full w-full z-10",
      onClick: _cache[2] || (_cache[2] = (event) => $setup.updateSearchTerm(event.target.textContent, false))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.trainingsTagsMatching, (tag) => {
        return openBlock(), createElementBlock("li", {
          key: tag,
          class: "cursor-pointer hover:bg-slate-200 p-2",
          textContent: toDisplayString(tag)
        }, null, 8, _hoisted_3);
      }), 128))
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$1.__file = "components/SearchBar.vue";
var __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/renatodelpupo/Projects/team-sessions/components/SearchBar.vue"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "p-8" };
function _sfc_render(_ctx, _cache) {
  const _component_SearchBar = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_SearchBar)
      ])
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/SearchBar.story.vue";
var SearchBar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/renatodelpupo/Projects/team-sessions/components/SearchBar.story.vue"]]);
export { SearchBar_story as default };
