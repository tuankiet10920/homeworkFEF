<script setup></script>
<template>
  <div class="container">
    <form @submit.prevent="submitForm" class="mb-4">
      <div class="mb-3">
        <input
          v-model="title"
          type="text"
          class="form-control"
          placeholder="Tiêu đề"
        />
      </div>
      <div class="mb-3">
        <input
          v-model="author"
          type="text"
          class="form-control"
          placeholder="Tác giả"
        />
      </div>
      <div class="mb-3">
        <input
          v-model.number="price"
          type="number"
          class="form-control"
          placeholder="Giá"
        />
      </div>
      <div class="mb-3">
        <input
          v-model="category"
          type="text"
          class="form-control"
          placeholder="Thể loại"
        />
      </div>
      <button type="submit" class="btn btn-primary">Thêm sách</button>
    </form>
  </div>
</template>
<style scoped></style>
