<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import ProductShelf from '@/components/ProductShelf.vue'
import SearchForm from '@/components/icons/SearchForm.vue'
import FilterDropdown from '@/components/icons/FilterDropdown.vue'

import { computed, ref } from 'vue'
import { useUserProductStore } from '@/stores/UserProduct'

const userProductStore = useUserProductStore()
const searchText = ref('')
const bodyType = ref<string>('')
const tagNames = ref<string[]>([])
const minPrice = ref(100)
const maxPrice = ref(1000)

const filteredProducts = computed(() => {
  return userProductStore.filterProducts(searchText.value, bodyType.value, tagNames.value, {
    min: minPrice.value,
    max: maxPrice.value
  })
})

const handleSearch = (search: string) => {
  searchText.value = search
}

const handleCheckboxRemove = (remove: string) => {
  const index = tagNames.value.indexOf(remove)
  if (index !== -1) {
    tagNames.value.splice(tagNames.value.indexOf(remove), 1)
    // console.log('Deleted', tagNames.value)
  }
}

const handleCheckboxAdd = (add: string) => {
  if (!tagNames.value.includes(add)) {
    tagNames.value.push(add)
    // console.log('Added', tagNames.value)
  }
}

const handleButtonToggle = (active: string) => {
  bodyType.value = active
  // console.log(active)
}

const controlPriceRange = (pRange: { min: number; max: number }) => {
  minPrice.value = pRange.min
  maxPrice.value = pRange.max

  // console.log('Price Range:', minPrice.value, maxPrice.value)
}

// const handleCheckbox = (filter: string) => {
//   let tagArray: Array<string> = []
//   if (filteredTags.value.includes(filter)) {
//     filteredTags.value.splice(filteredTags.value.indexOf(filter), 1)
//     // This return Object
//   }

//   filteredTags.value.push(filter)
//   // console.log('Check before send', filteredTags.value)
//   // console.log('Filter Tag', typeof filteredTags.value)
// }
</script>

<template>
  <UserLayout>
    <div class="mx-10 mb-4">
      <div class="mt-4 mb-8 text-5xl font-bold drop-shadow-lg">
        <h1>Y2K TH SHOP</h1>
      </div>
      <!-- Filter & Tags -->
      <div class="flex items-jusitfy mt-4 mb-8 gap-2">
        <!-- Search bar -->
        <SearchForm @search="handleSearch"></SearchForm>
        <!-- Filter -->
        <FilterDropdown
          :products="filteredProducts"
          @add="handleCheckboxAdd"
          @remove="handleCheckboxRemove"
          @active="handleButtonToggle"
          @pRange="controlPriceRange"
        ></FilterDropdown>
      </div>
      <!-- Product -->
      <ProductShelf :products="filteredProducts"></ProductShelf>
    </div>
  </UserLayout>
</template>

<style scoped></style>
