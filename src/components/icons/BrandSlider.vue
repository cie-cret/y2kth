<script setup lang="ts"></script>

<template>
  <div class="logos py-4 border-y-solid border-y-4 border-black flex relative">
    <div class="logos-slide flex gap-16">
      <!-- <div class="logos-slide"> -->
      <img src="../logos/3m.svg" />
      <img src="../logos/barstool-store.svg" />
      <img src="../logos/budweiser.svg" />
      <img src="../logos/buzzfeed.svg" />
      <img src="../logos/forbes.svg" />
      <img src="../logos/macys.svg" />
      <img src="../logos/menshealth.svg" />
      <img src="../logos/mrbeast.svg" />

      <img src="../logos/3m.svg" />
      <img src="../logos/barstool-store.svg" />
      <img src="../logos/budweiser.svg" />
      <img src="../logos/buzzfeed.svg" />
      <img src="../logos/forbes.svg" />
      <img src="../logos/macys.svg" />
      <img src="../logos/menshealth.svg" />
      <img src="../logos/mrbeast.svg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.logos {
  background: #f0f0f0;
  overflow: hidden;
}

.logos-slide {
  animation: 20s slide infinite linear;

  img {
    height: 50px;
  }
}

@keyframes slide {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-143%);
  }
}
</style>
