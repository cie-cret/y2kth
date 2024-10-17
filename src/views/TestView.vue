<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/navigation'

import '../style.css'

// import required modules
import { Navigation } from 'swiper/modules'

const modules = [Navigation]

// export default {
//   components: {
//     Swiper,
//     SwiperSlide
//   },
//   setup() {
//     return {
//       modules: [Navigation]
//     }
//   }
// }
</script>

<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>

<style lang="scss">
// * {
//   justify-content: center;
//   align-items: center;
// }
</style>
