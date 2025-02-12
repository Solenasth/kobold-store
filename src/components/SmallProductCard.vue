<template>
  <div
    class="flex h-50 w-lg overflow-x-hidden rounded-xl border-1 border-amber-600/40 drop-shadow-xl"
  >
    <img
      :src="'https://plus.unsplash.com/premium_vector-1725494673310-9180164efa3d?q=80&w=2284&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
      :alt="product.imgAlt"
      class="fit-cover h-full w-30 object-cover"
    />
    <!-- ITEM DATA -->
    <div class="flex w-full flex-col gap-3 bg-white px-4 py-2">
      <h1 class="text-center text-2xl font-semibold text-red-800">{{ product.name }}</h1>
      <p class="line-clamp-2">{{ product.description }}</p>
      <div class="grid grid-cols-2">
        <div class="flex items-center justify-center overflow-hidden pr-3 align-middle">
          <span class="pr-2 font-bold text-amber-700">Quantity:</span>
          <button
            class="h-auto rounded-xs border-1 border-red-700 bg-red-300 px-1 py-0.5 text-red-800"
            @click="store.removeFromCart(product)"
          >
            -
          </button>
          <p class="w-10 text-center">{{ productCount }}</p>
          <button
            class="h-auto rounded-xs border-1 border-green-700 bg-green-300 px-1 py-0.5 text-green-800"
            @click="store.addToCart(product)"
          >
            +
          </button>
        </div>
        <div class="flex items-center justify-center">
          <p class="">
            <span class="pr-1 font-bold text-amber-700">Total: </span>
            {{ product.price * productCount }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from './types'
import { useCartStore } from '@/stores/cartStore'

const store = useCartStore()

const props = defineProps<{ product: Product }>()
const productCount = computed(() => store.productCountById(props.product.id))
</script>
