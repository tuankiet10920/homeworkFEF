<script setup>
import { reactive, defineEmits } from 'vue'

const emits = defineEmits()
const book = reactive({
  id: null,
  title: '',
  author: '',
  price: null,
  category: '',
})
const clearForm = () => {
  book.id = null
  book.title = ''
  book.author = ''
  book.price = null
  book.category = ''
}
const addBook = () => {
  emits('add-book', {})
  clearForm()
}
</script>
<template>
  <form @submit.prevent="submitForm" class="mb-4">
    <div class="mb-3">
      <input
        v-model="book.title"
        type="text"
        class="form-control"
        placeholder="Tiêu đề"
      />
    </div>
    <div class="mb-3">
      <input
        v-model="book.author"
        type="text"
        class="form-control"
        placeholder="Tác giả"
      />
    </div>
    <div class="mb-3">
      <input
        v-model.number="book.price"
        type="number"
        class="form-control"
        placeholder="Giá"
      />
    </div>
    <div class="mb-3">
      <input
        v-model="book.category"
        type="text"
        class="form-control"
        placeholder="Thể loại"
      />
    </div>
    <button type="submit" class="btn btn-primary">Thêm sách</button>
  </form>
</template>
<style></style>
