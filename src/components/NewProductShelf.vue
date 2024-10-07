<script setup lang="ts">
import NewIcon from './icons/NewIcon.vue'

defineProps<{ products: Array<string | number | Array<string>> }>()

const getImgURL = (pImage: string) => {
  const path = new URL(`@/components/products/`, import.meta.url)
  return `${path}/${pImage}.jpg`
}
</script>

<template>
  <div class="container max-w-screen-2xl flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8">
      <!-- Product -->
      <div v-for="(product, index) in products" :key="index">
        <div
          v-if="product.tags.includes('new')"
          class="card card-compact bg-primary w-96 border-solid border-4 border-black rounded-none"
        >
          <figure>
            <img
              :src="getImgURL(product.pImage)"
              class="border-solid border-b-4 border-black w-96 h-96 object-cover"
            />
          </figure>
          <div class="card-body text-white">
            <h2 class="card-title">
              {{ product.pName }}
              <NewIcon></NewIcon>
            </h2>
            <p>{{ product.price }} THB</p>
            <div class="card-actions justify-end">
              <button
                class="btn btn-base-100 text-xl rounded-none hover:bg-base-200 active:bg-primary add-to-cart"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// .add-to-cart {
//   font-family: 'Pixelify Sans', sans-serif;
//   font-weight: 700;
// }

.btn {
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
</style>
