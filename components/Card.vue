<script setup lang="ts">
export interface CardProps {
  author: string;
  date: string;
  description?: string;
  image: string;
  recordingUrl: string;
  tags?: Array<string>;
  title: string;
}

defineProps<CardProps>();
</script>

<template>
  <div
    class="bg-zinc-800 focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 hover:outline hover:outline-2 hover:outline-blue-500 overflow-hidden rounded-lg text-slate-50"
  >
    <a class="block" :href="recordingUrl" target="_blank">
      <img alt="" class="block w-full" :src="image" />
      <div class="p-6">
        <h2 class="text-2xl" v-text="title" />
        <p class="text-lg">by {{ author }}</p>
        <p class="text-sm" v-text="date" />
        <p
          class="mt-4 text-base whitespace-pre-line"
          v-text="description.trim()"
        />
      </div>
    </a>
  </div>
</template>
