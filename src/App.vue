<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="h-screen w-screen bg-red-50 pt-18">
    <RouterView />
  </div>
</template>
