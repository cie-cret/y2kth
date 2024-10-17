<script setup lang="ts">
import NewIcon from './icons/NewIcon.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

// defineProps<{ products: Array<string | number | Array<string>> }>()

interface Product {
  pName: string
  pImage: string
  quantity?: number
  about?: string
  status?: string
  price: number
  tags: string[]
}

defineProps<{ products: Product[] }>()

const getImgURL = (pImage: string) => {
  return `/images/products/${pImage}.jpg`
}

// Swiper modules (register the Navigation module directly)
const modules = [Navigation]
</script>

<template>
  <div class="container flex justify-center">
    <div class="control-grid grid gap-x-20 gap-y-8">
      <!-- Product -->
      <div v-for="(product, index) in products" :key="index" class="normal-view">
        <div
          v-if="product.tags.includes('new')"
          class="control-card card card-compact bg-primary border-solid border-4 border-black rounded-none"
        >
          <figure>
            <img :src="getImgURL(product.pImage)" class="control-img object-cover" />
          </figure>
          <div class="card-body border-solid border-t-4 border-black text-white">
            <h2 class="card-title">
              {{ product.pName }}
              <NewIcon></NewIcon>
            </h2>
            <p>{{ product.price }} THB</p>
            <div class="card-actions justify-end">
              <button
                class="control-btn btn btn-base-100 text-xl rounded-none hover:bg-base-200 active:bg-primary add-to-cart"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Product End -->
      <!-- Carousel -->
      <swiper :navigation="true" :modules="modules" class="mySwiper control-swiper carousel-view">
        <!-- <swiper :navigation="true" :modules="modules" class="mySwiper control-img"> -->
        <swiper-slide
          v-for="(product, index) in products.filter((product) => product.tags.includes('new'))"
          :key="index"
          class="carousel-view"
        >
          <div
            class="carousel-item control-card card card-compact bg-primary border-solid border-4 border-black rounded-none"
          >
            <figure>
              <img :src="getImgURL(product.pImage)" class="control-img object-cover" />
            </figure>
            <div class="card-body border-solid border-t-4 border-black text-white">
              <h2 class="card-title">
                {{ product.pName }}
                <NewIcon></NewIcon>
              </h2>
              <p>{{ product.price }} THB</p>
              <div class="card-actions justify-end">
                <button
                  class="control-btn btn btn-base-100 text-xl rounded-none hover:bg-base-200 active:bg-primary add-to-cart"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- Carousel End -->
    </div>
  </div>
</template>

<style scoped lang="scss">
// .add-to-cart {
//   font-family: 'Pixelify Sans', sans-serif;
//   font-weight: 700;
// }

@import '../assets/sass/breakpoints.scss';
@import '../assets/sass/colors.scss';

.container {
  max-width: 100%;
}

.control-grid {
  @include mobile {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 0.5rem;
  }

  @include laptop {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 2rem;
  }
}

.normal-view {
  @include mobile {
    display: none;
  }

  @include laptop {
    display: flex;
  }
}

.carousel-view {
  @include mobile {
    display: flex;
  }

  @include laptop {
    display: none;
  }
}

.control-swiper {
  @include mobile {
    width: 18.5rem;
    height: 35rem;
  }
}

.control-card {
  @include mobile {
    width: 18rem;
  }

  @include laptop {
    width: 24rem;
  }
}

.control-img {
  @include mobile {
    width: 20rem;
    height: 34rem;
  }

  @include laptop {
    width: 24rem;
    height: 24rem;
  }
}

.control-btn {
  // box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 1);
  border-top: 3px solid rgba(242, 242, 242, 1);
  border-left: 3px solid rgba(242, 242, 242, 1);
  border-bottom: 3px solid rgba(159, 154, 154, 0.8);
  border-right: 3px solid rgba(159, 154, 154, 0.8);
  //   outline: 4px solid black;

  &:active {
    transform: scale(1);
    border-top: 4px solid rgba(97, 97, 97, 0.5);
    border-left: 4px solid rgba(97, 97, 97, 0.5);
    border-bottom: 1px solid rgba(97, 97, 97, 1);
    border-right: 1px solid rgba(97, 97, 97, 1);
  }
}

::v-deep .swiper-button-prev,
::v-deep .swiper-button-next {
  color: #f0f0f0 !important;
}
</style>
