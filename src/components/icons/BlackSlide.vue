<script setup lang="ts">
defineProps<{ message: string }>()
</script>

<template>
  <div class="logos bg-primary py-4 border-y-solid border-y-4 border-black">
    <div class="logos-slide flex gap-16 text-base-100">
      <!-- <div class="logos-slide"> -->
      <span>{{ message }}</span>
      <span>{{ message }}</span>
      <span>{{ message }}</span>
      <span>{{ message }}</span>
      <span>{{ message }}</span>
      <span>{{ message }}</span>
      <span>{{ message }}</span>
      <span>{{ message }}</span>
      <!-- REVISE PROPS HERE -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.logos {
  background: #000000;
  overflow: hidden;
}

.logos-slide {
  animation: 9s slide infinite linear;

  span {
    text-transform: uppercase;
    display: flex;
    place-items: center;
    height: 50px;
    min-width: fit-content;
    font-family: 'VT323', monospace;
    font-weight: 700;
    font-size: 5rem;
  }
}

@keyframes slide {
  from {
    transform: translateX(-115%);
  }
  to {
    transform: translateX(-0%);
  }
}
</style>
