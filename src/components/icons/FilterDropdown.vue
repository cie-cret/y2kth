<script setup lang="ts">
import { ref, defineEmits } from 'vue'

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

const titles: Array<string> = ['body', 'type', 'price']
const bodies: Array<string> = ['all', 'masculine', 'feminine']
const tags: Array<string> = ['tops', 'bottoms', 'accessory']

const emit = defineEmits(['remove', 'add', 'active', 'pRange'])
const show = ref(false)
const activeBody = ref('all')
const minPrice = ref(100)
const maxPrice = ref(1000)

const capitalizeFirstLetter = (letter: string): string => {
  return letter.charAt(0).toUpperCase() + letter.slice(1)
}

const sendFilter = (e: Event) => {
  if (!(e.target as HTMLInputElement).checked) {
    emit('remove', (e.target as HTMLInputElement).value)
  } else {
    emit('add', (e.target as HTMLInputElement).value)
  }
  // emit('filter', e.target.value)
}

const activeButton = (e: Event) => {
  const value = (e.target as HTMLButtonElement).value
  activeBody.value = value
  emit('active', value)
}

const updatePriceRange = () => {
  emit('pRange', { min: minPrice.value, max: maxPrice.value })
}
</script>

<template>
  <div class="flex items-center relative">
    <button class="btn btn-primary btn-sm" @click="show = !show">Filters</button>
    <div v-if="show" class="absolute top-10 z-20 w-48 shadow">
      <ul class="bg-base-100 z-[1] w-96 p-2 shadow border-primary border-2">
        <div v-for="title in titles" :key="title" class="mb-2">
          <div class="flex">
            <h4 class="flex mb-1">{{ capitalizeFirstLetter(title) }}:</h4>
          </div>
          <!-- Sex -->
          <div v-if="title === 'body'" class="flex ml-6">
            <li v-for="(body, index) in bodies" :key="index" class="flex mr-4">
              <button
                :value="body"
                class="btn btn-sm"
                :class="{ 'btn-primary': activeBody === body }"
                type="button"
                name="body"
                @click="activeButton"
              >
                {{ capitalizeFirstLetter(body) }}
              </button>
            </li>
          </div>
          <!-- Type -->
          <div v-else-if="title === 'type'" class="flex indent-1 ml-6">
            <li v-for="(tag, index) in tags" :key="index" class="flex mr-4">
              <input
                :id="`option-${index}`"
                type="checkbox"
                :value="tag"
                class="checkbox checkbox-sm checkbox-primary rounded-md [--chkfg:white]"
                @change="sendFilter"
              />
              <label :for="`option-${tag}`" class="select-none">{{
                capitalizeFirstLetter(tag)
              }}</label>
            </li>
          </div>
          <!-- Price -->
          <div v-else-if="title === 'price'" class="flex justify-center">
            <div class="price-input flex justify-center mx-6">
              <div class="min-div flex">
                <span>Min:</span>
                <input
                  type="number"
                  class="text-center bg-base-100 text-sm w-full border-default border-2 input-min price"
                  v-model="minPrice"
                  @input="updatePriceRange"
                />
              </div>
              <div class="flex text-primary mx-6">—</div>
              <div class="max-div flex">
                <span>Max:</span>
                <input
                  type="number"
                  class="text-center bg-base-100 text-sm w-full border-default border-2 input-max price"
                  v-model="maxPrice"
                  @input="updatePriceRange"
                />
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.price {
  margin: 0 2px;

  &:focus {
    outline: 2px solid #fe68a8;
    outline-offset: 0px;
  }
}

.active {
  background-color: #fe68a8;
}
</style>
