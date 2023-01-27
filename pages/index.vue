<script setup>
import trainingsList from '@/api/trainings.json';

const filterTerm = ref('');

const trainingsListFiltered = computed(() => {
  if (!filterTerm.value) return trainingsList;

  return trainingsList?.filter((training) => {
    const { author, description, tags, title } = training;
    const filterExpression = new RegExp(filterTerm.value, 'gi');

    return [author, description, ...tags, title].some(text => text.match(filterExpression))
  })
})

const updateSearch = (term) => {
  filterTerm.value = term;
}
</script>

<template>
  <div class="bg-zinc-900 min-h-screen">
    <h1
      class="bg-zinc-800 font-semibold px-8 py-4 text-3xl text-center text-slate-100"
    >
      Team Sessions
    </h1>

    <div class="p-8 md:py-16">
      <SearchBar class="mb-8" :trainings-list="trainingsList" @search="updateSearch"/>
      <CardList :cards="trainingsListFiltered"/>
    </div>
  </div>
</template>
