<template>
  <div class="relative max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
    <!-- product type -->
    <div
      class="absolute rounded-sm border-2 border-t-0 border-l-0 border-amber-700 bg-amber-100 px-1 py-0.5 text-sm text-amber-800 drop-shadow-lg"
    >
      {{ product.type }}
    </div>
    <!-- rarity -->
    <div
      class="absolute right-0 flex items-center gap-1 rounded-sm border-2 border-t-0 border-r-0 px-1 py-0.5 text-sm drop-shadow-lg"
      :class="rarityClass"
    >
      <div :class="rarityClass" class="rarity-gem"></div>
      <p class="text-sm font-semibold text-white!" :class="rarityClass">
        {{ product.rarity }}
      </p>
    </div>
    <img
      :src="'https://plus.unsplash.com/premium_vector-1725494673310-9180164efa3d?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
      :alt="product.imgAlt"
      class="fit-cover h-50 w-full object-cover"
    />
    <div class="px-2 py-1.5">
      <!-- tilte section -->
      <div class="mb-1 flex justify-center">
        <p class="text-xl font-bold text-red-800">{{ product.name }}</p>
      </div>

      <!-- rarity divisor -->
      <div class="flex items-center">
        <div class="h-0.5 w-full" :class="rarityClass"></div>
        <div :class="rarityClass" class="rarity-gem"></div>
        <div class="h-0.5 w-full" :class="rarityClass"></div>
      </div>

      <!-- description section -->
      <p class="mb-6 line-clamp-5 h-30 text-base text-clip text-gray-700">
        {{ product.description }}
      </p>

      <!-- price & add to cart -->
      <div class="content-middle mb-1 flex items-center justify-between pb-1">
        <p><span class="font-bold text-yellow-800">Price: </span> {{ product.price }} gold</p>
        <button
          @click="store.addToCart(product)"
          class="border-2 border-red-700 px-2 text-red-700 hover:bg-orange-200"
        >
          Add to Hoard
        </button>
      </div>

      <!-- divisor -->
      <div class="h-0.5 w-full" :class="rarityClass"></div>
      <!-- tags -->
      <div class="pt-1" v-if="product.tags.length">
        <Chip v-for="(tag, index) in product.tags" :key="`${product.name}_tag_${index}`" :tag />
        <h1>{{ store.productCountById(product.id) }}</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Chip from './CardChip.vue'
import type { Product } from './types'
import { useCartStore } from '@/stores/cartStore'

const store = useCartStore()

const props = defineProps<{
  product: Product
}>()

const rarityClass = computed(() => {
  switch (props.product.rarity.toLowerCase()) {
    case 'common':
      return 'bg-stone-600 border-stone-900'
    case 'uncommon':
      return 'bg-emerald-600 border-emerald-900 '
    case 'rare':
      return 'bg-cyan-600 border-cyan-900 '
    case 'very rare':
      return 'bg-violet-600 border-violet-900 '
    case 'legendary':
      return 'bg-orange-600 border-orange-900'
    default:
      return 'bg-gray-600 border-gray-700'
  }
})
</script>

<style scoped>
.rarity-gem {
  width: 10px;
  height: 10px;
  border-width: 2px;
  border-radius: 100%;
}
</style>
