<script setup lang="ts">
import ProductGrid from './components/ProductGrid.vue'
import type { Product } from './components/types'
import { ref, onMounted } from 'vue'

const products = ref<Product[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

async function fetchProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/data')
    if (!response.ok) throw new Error('failed to load products')
    products.value = await response.json()
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    loading.value = false
  }
}

onMounted(fetchProducts)
</script>

<template>
  <div class="h-full w-screen bg-red-900 p-4">
    <h1 class="text-2xl font-bold">Our product</h1>
    <ProductGrid :products />
  </div>
</template>
