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
    class="bg-zinc-800 flex flex-col focus-within:outline focus-within:outline-2 focus-within:outline-blue-500 hover:outline hover:outline-2 hover:outline-blue-500 overflow-hidden relative rounded-lg text-slate-50"
  >
    <img alt="" class="block w-full" :src="image" />
    <div class="flex flex-col h-full justify-between p-6">
      <div>
        <h2 class="text-2xl">
          <a
            class="after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0"
            :href="recordingUrl"
            target="_blank"
            v-text="title"
          />
        </h2>
        <p v-if="author" class="text-lg">by {{ author }}</p>
        <small class="text-sm" v-text="date" />
        <p
          class="mt-4 text-base whitespace-pre-line"
          v-text="description?.trim()"
        />
      </div>

      <div role="list" class="flex gap-2 mt-8">
        <TagFlag v-for="tag in tags" :key="tag" :label="tag" role="listitem" />
      </div>
    </div>
  </div>
</template>
