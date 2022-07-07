<script setup lang="ts">
import { CardProps } from './Card.vue';

interface CardListType {
  cards: Array<CardProps>;
}

defineProps<CardListType>();
</script>

<template>
  <div class="flex flex-wrap justify-center gap-8" role="list">
    <Card
      v-for="card in cards"
      class="w-96"
      :key="card.title"
      role="listitem"
      v-bind="card"
    />
  </div>
</template>
