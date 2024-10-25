<script setup>
import Bai1 from '../../components/Bai1Lab5.vue'
import Bai2 from '../../components/Bai2Lab5.vue'
import { computed, ref } from 'vue'

const books = ref([])

const isHas = computed(() => {
  if (books.value.length > 0) {
    return true
  }
  return false
})
</script>
<template>
  <div class="container">
    <Bai2 />
    <Bai1
      v-if="isHas"
      v-for="book in books"
      :id="book.id"
      :title="book.title"
      :author="book.author"
      :price="book.price"
      :category="book.category"
    />
  </div>
</template>
<style scoped></style>
