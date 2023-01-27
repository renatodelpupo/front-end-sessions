<script setup>
const emit = defineEmits(['search']);

const props = defineProps({
  trainingsList: {
    required: true,
    type: Array,
  },
});

const filterTags = ref([]);
const showSuggestions = ref(false);
const text = ref('');

const trainingsTags = computed(() => {
  return [ ...new Set(props.trainingsList.map((training) => training.tags).flat().sort())];
});

const trainingsTagsMatching = computed(() => {
  if (!text) return [];

  return trainingsTags.value.filter((tag) =>
    tag.match(new RegExp(text.value, 'gi'))
  );
});

const updateSearchTerm = (term, suggestionsVisibility) => {
  emit('search', term);
  showSuggestions.value = term ? suggestionsVisibility : false;
  text.value = term;
};
</script>

<template>
  <div class="flex flex-col gap-2 relative">
    <label class="text-slate-50" for="search">Filter by any term</label>
    <input
      class="block p-2 rounded-md w-full"
      id="search"
      name="search"
      placeholder="Type here..."
      type="text"
      @input="updateSearchTerm($event.target.value, true)"
      v-model="text"
    />

    <ul
      v-if="showSuggestions"
      class="absolute bg-slate-50 flex flex-col gap-1 p-0 top-full w-full z-10"
      @click="(event) => updateSearchTerm(event.target.textContent, false)"
    >
      <li
        v-for="tag in trainingsTagsMatching"
        :key="tag"
        class="cursor-pointer hover:bg-slate-200 p-2"
        v-text="tag"
      />
    </ul>
  </div>
</template>
