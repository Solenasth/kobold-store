<template>
  <div class="mr-auto ml-auto flex w-4xl flex-col items-center gap-3 bg-white pt-6">
    <h1 class="mb-4 text-4xl font-bold text-red-800">Your Hoard</h1>

    <SmallProductCard
      v-for="(product, index) in store.getAllUniqueProducts"
      :product
      v-bind:key="`cart_item_${index}`"
    />
  </div>
</template>

<script setup lang="ts">
import SmallProductCard from '@/components/SmallProductCard.vue'
import { useCartStore } from '@/stores/cartStore'

const store = useCartStore()
</script>
