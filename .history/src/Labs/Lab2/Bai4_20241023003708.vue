<script setup>
import { ref } from 'vue'

const isActive = ref(false)
const fontsize = ref(16)
</script>
<template>
  <div class="container">
    <h1 :class="isActive" :style="{ fontSize: fontsize + 'px' }">
      Văn bản có thể thay đổi
    </h1>
    <button @click="isActive === false ? true : false">Bật/Tắt màu chữ</button>
    <label
      >Chọn kích thước chữ:
      <input type="number" v-model="fontsize" />
    </label>
    <p v-if="fontsize > 10 && fontsize < 50">Kích thước không hợp lệ!</p>
  </div>
</template>
<style scoped>
.active {
  color: orangered;
}
</style>
