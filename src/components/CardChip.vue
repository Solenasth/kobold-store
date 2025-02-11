<template>
  <span
    class="mr-1 mb-1 inline-block rounded-lg border-0 bg-white px-1 py-1 text-sm font-semibold text-amber-800"
  >
    #{{ tag }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  tag: String,
})
</script>
