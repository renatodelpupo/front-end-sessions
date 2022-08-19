<script setup>
const text = ''
</script>

<template>
  <div class="flex flex-col gap-2">
    <label class="text-slate-50" for="search">Filter by any term</label>
    <input
      class="block p-2 rounded-md w-full"
      id="search"
      name="search"
      placeholder="Type here..."
      type="text"
      @input="$emit('search', $event.target.value)"
      v-model="text"
    />
  </div>
</template>
