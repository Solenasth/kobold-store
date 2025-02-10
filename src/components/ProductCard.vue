<template>
  <div class="bg-white-100 max-w-xs overflow-hidden rounded-lg shadow-lg">
    <img
      :src="'https://plus.unsplash.com/premium_vector-1725494673310-9180164efa3d?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
      :alt="product.imgAlt"
      class="fit-cover h-50 w-full object-cover"
    />
    <div class="px-6 py-4">
      <div class="mb-2 text-xl font-bold text-slate-900">{{ product.name }}</div>
      <p class="text-base text-gray-700">
        {{ product.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2" v-if="product.tags.length">
      <Chip v-for="(tag, index) in product.tags" :key="`${product.name}_tag_${index}`" :tag />
    </div>
  </div>
</template>

<script setup lang="ts">
import Chip from './CardChip.vue'
import type { Product } from './types'

defineProps<{
  product: Product
}>()
</script>

<style scoped></style>
