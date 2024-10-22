<script setup>
import { ref } from 'vue'

const active = ref(false)
const fontsize = ref(16)
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
<style scoped>
.active {
  color: orangered;
}
</style>
