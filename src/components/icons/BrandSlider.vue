<script setup lang="ts"></script>

<template>
  <div class="logos py-4 border-y-solid border-y-4 border-black flex relative">
    <div class="logos-slide flex gap-16">
      <!-- <div class="logos-slide"> -->
      <img src="/images/logos/3m.svg" />
      <img src="/images/logos/barstool-store.svg" />
      <img src="/images/logos/budweiser.svg" />
      <img src="/images/logos/buzzfeed.svg" />
      <img src="/images/logos/forbes.svg" />
      <img src="/images/logos/macys.svg" />
      <img src="/images/logos/menshealth.svg" />
      <img src="/images/logos/mrbeast.svg" />

      <img src="/images/logos/3m.svg" />
      <img src="/images/logos/barstool-store.svg" />
      <img src="/images/logos/budweiser.svg" />
      <img src="/images/logos/buzzfeed.svg" />
      <img src="/images/logos/forbes.svg" />
      <img src="/images/logos/macys.svg" />
      <img src="/images/logos/menshealth.svg" />
      <img src="/images/logos/mrbeast.svg" />
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
