<script setup>
import { ref, reactive } from 'vue'

const types = ref([
  {
    id: 1,
    name: 'Tiểu thuyết',
  },
  {
    id: 2,
    name: 'Phi hư cấu',
  },
  {
    id: 3,
    name: 'Khoa học',
  },
  {
    id: 4,
    name: 'Lịch sử',
  },
  {
    id: 5,
    name: 'Phát triển bản thân',
  },
])

const book = reactive({
  id: null,
  title: '',
  author: '',
  category: '',
  quantity: null,
})

const listBooks = ref([])

const addBook = () => {
  // Add the book to the library
  if (book.title !== '' && book.author !== '' && book.category !== '') {
    listBooks.value.push({
      id: Date.now(),
      title: book.title,
      author: book.author,
      category: book.category,
      quantity: book.quantity,
    })
    // return value equal null
    book.id = null
    book.title = ''
    book.author = ''
    book.category = ''
    book.quantity = 1
  }
}
</script>
<template>
  <div class="container">
    <form @submit.prevent="">
      <h2>Thêm danh sách mới vào thư viện</h2>
      <div class="mb-3">
        <label for="title" class="form-label">Tiêu đề</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="book.title"
          placeholder="Nhập tiêu đề"
        />
      </div>
      <div class="mb-3">
        <label for="author" class="form-label">Tác giả</label>
        <input
          type="text"
          class="form-control"
          id="author"
          v-model="book.author"
          placeholder="Nhập tác giả"
        />
      </div>
      <select class="form-select" aria-label="Thể loại" v-model="book.category">
        <option value="">Chọn thể loại</option>
        <option v-for="type in types" :value="type.id">
          {{ type.name }}
        </option></select
      ><br />
      <button type="button" class="btn btn-info text-white">Thêm sách</button>
    </form>
    <br />
    <hr />
    <br />
    <h1>Danh sách</h1>
    <div class="card">
      <p class="fs-4">.fs-4 text</p>
      <p class="fs-5">.fs-5 text</p>
      <p class="fs-5">.fs-5 text</p>
    </div>
  </div>
</template>
<style scoped></style>
