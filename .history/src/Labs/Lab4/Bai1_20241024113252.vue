<script setup>
import { computed } from 'vue'

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

const listKinds = computed(() => {})
</script>
<template>
  <div class="container">
    <form>
      <h2>Thêm danh sách mới vào thư viện</h2>
      <div class="mb-3">
        <label for="title" class="form-label">Tiêu đề</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Nhập tiêu đề"
        />
      </div>
      <div class="mb-3">
        <label for="author" class="form-label">Tác giả</label>
        <input
          type="text"
          class="form-control"
          id="author"
          placeholder="Nhập tác giả"
        />
      </div>
      <select class="form-select" aria-label="Thể loại">
        <option selected>Chọn thể loại</option>
        <option value="1">Tiểu thuyết</option>
        <option value="2">Phi hư cấu</option>
        <option value="3">Khoa học</option>
        <option value="3">Lịch sử</option>
        <option value="3">Phát triển bản thân</option></select
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
