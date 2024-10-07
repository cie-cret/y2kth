<script setup>
import { defineProps } from 'vue'

defineProps({
  message: String
})
</script>

<template>
  <div class="relative">
    <!-- <div class="logos-slide"> -->
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>
    <div class="wave wave4"></div>
    <!-- REVISE PROPS HERE -->
  </div>
</template>

<style scoped lang="scss">
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: url(wave.png);
  background-size: 1000px 100px;
}

.wave1 {
  animation: wave1 30s linear infinite;
  z-index: 100;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}

.wave2 {
  animation: wave2 15s linear infinite;
  z-index: 99;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}

.wave3 {
  animation: wave1 30s linear infinite;
  z-index: 98;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
}

.wave4 {
  animation: wave2 15s linear infinite;
  z-index: 97;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}

@keyframes wave1 {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1000px;
  }
}

@keyframes wave2 {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -1000px;
  }
}

// REVISE SCSS HERE
</style>
