<script setup>
import { ref, reactive } from 'vue'

const isEdit = ref(false)

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
    const type = types.value.find(type => type.id === book.category)
    listBooks.value.push({
      id: Date.now(),
      title: book.title,
      author: book.author,
      category: type.name,
      quantity: book.quantity,
    })
    // return value equal null
    book.id = null
    book.title = ''
    book.author = ''
    book.category = ''
    book.quantity = null
  } else {
    alert('Vui lòng điền đầy đủ thông tin!')
  }
}

const removeBook = bookId => {
  // Remove the book from the library
  listBooks.value = listBooks.value.filter(book => book.id !== bookId)
}

const editingBookId = ref(0)

const editBook = bookId => {
  // set enemy is true to edit the book
  isEdit.value = true
  // fill infomation of book into fields
  const bookNeedEdit = listBooks.value.find(book => book.id === bookId)
  book.id = bookNeedEdit.id
  book.title = bookNeedEdit.title
  book.author = bookNeedEdit.author
  book.category = bookNeedEdit.category
  book.quantity = bookNeedEdit.quantity
  editingBookId.value = bookId
  console.log(bookNeedEdit)
}

const cancel = () => {
  isEdit.value = false
  clearForm()
}

const clearForm = () => {
  book.id = null
  book.title = ''
  book.author = ''
  book.category = ''
  book.quantity = null
}

const editingBook = () => {
  const bookIndex = listBooks.value.findIndex(
    book => book.id === editingBook.value,
  )
  console.log(bookIndex)
}
</script>
<template>
  <div class="container">
    <form @submit.prevent="addBook">
      <h2 v-html="isEdit ? 'Cập nhật sách' : 'Thêm sách mới vào thư viện'"></h2>
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
        <option
          :value="isEdit ? book.category : ''"
          v-html="isEdit ? book.category : 'Chọn thể loại'"
        ></option>
        <option v-for="type in types" :value="type.id">
          {{ type.name }}
        </option></select
      ><br />
      <div class="mb-3">
        <label for="quantity" class="form-label">Số lượng</label>
        <input
          type="number"
          min="1"
          max="200"
          class="form-control"
          id="quantity"
          v-model="book.quantity"
          placeholder="Nhập số lượng"
        />
      </div>
      <br />
      <button v-if="!isEdit" type="submit" class="btn btn-primary text-white">
        Thêm sách
      </button>
      <div v-else class="btn-group">
        <button
          @click="editingBook"
          type="submit"
          class="btn btn-primary text-white"
        >
          Cập nhật sách
        </button>
        <button
          type="submit"
          class="btn btn-secondary text-white"
          @click="cancel"
        >
          Hủy
        </button>
      </div>
    </form>
    <br />
    <hr />
    <br />
    <h1>Danh sách</h1>
    <div class="container">
      <div class="row row-cols-3">
        <div class="col" v-for="book in listBooks">
          <div class="card">
            <p class="fs-4">{{ book.title }}</p>
            <p class="fs-5">Tác giả: {{ book.author }}</p>
            <p class="fs-5">Thể loại: {{ book.category }}</p>
            <p class="fs-5">Số lượng: {{ book.quantity }}</p>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-danger text-white"
                @click="removeBook(book.id)"
              >
                Xóa
              </button>
              <button
                type="button"
                class="btn btn-warning text-white"
                @click="editBook(book.id)"
              >
                Sửa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin-bottom: 20px;
}
.btn {
  margin-right: 10px;
}
</style>
