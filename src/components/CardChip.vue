<template>
  <span
    class="mr-2 mb-2 inline-block rounded-full bg-violet-200 px-3 py-1 text-sm font-semibold text-violet-800"
  >
    #{{ tag }}
  </span>
</template>

<script setup lang="ts">
defineProps({
  tag: String,
})
</script>
