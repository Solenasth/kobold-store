<template>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(theme(maxWidth.xs),1fr))] gap-5">
    <ProductCard
      v-for="(product, index) in products"
      :product="product"
      :key="`product_card_${index}`"
    />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { Product } from './types'

defineProps<{ products: Product[] }>()
</script>
