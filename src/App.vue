<script setup lang="ts">
import { RouterView } from 'vue-router'
import './style.css'
</script>

<template>
  <div class="wrapper">
    <!-- <nav>
      <div><RouterLink to="/">Home</RouterLink></div>
      <div><RouterLink to="/about">About</RouterLink></div>
    </nav> -->
  </div>

  <RouterView />
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 4px;
}
</style>
