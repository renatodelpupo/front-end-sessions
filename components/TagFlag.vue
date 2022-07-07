<script setup lang="ts">
defineProps({
  label: {
    required: true,
    type: String,
  },
});
</script>

<template>
  <span class="bg-zinc-400 p-2 rounded text-zinc-900" v-text="label" />
</template>
