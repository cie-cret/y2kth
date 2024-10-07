<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['search'])
const searchText = ref('')

const sendSearch = () => {
  emit('search', searchText.value)
  // console.log('search text: ', searchText.value)
}
</script>

<template>
  <div class="form-control">
    <input
      type="text"
      placeholder="Search"
      class="input input-bordered rounded-none"
      v-model="searchText"
      @keyup="sendSearch"
    />
  </div>
</template>

<style scoped>
input:focus {
  outline: 2px solid #fe68a8;
  outline-offset: 0px;
}
</style>
