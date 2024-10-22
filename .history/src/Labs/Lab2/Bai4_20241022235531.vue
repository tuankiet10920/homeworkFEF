<script setup>
import { reactive } from 'vue'
</script>
<template>
  <div class="container">
    <h1>Văn bản có thể thay đổi</h1>
    <button>Bật/Tắt màu chữ</button>
    <label
      >Chọn kích thước chữ:
      <input type="number" />
    </label>
    <p>Kích thước không hợp lệ!</p>
  </div>
</template>
<style scoped></style>
