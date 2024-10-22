<script setup>
import { ref } from 'vue'

const qty = ref(0)

const increaseQty = () => {
  qty.value++
}

const decreaseQty = () => {
  if (qty.value > 0) {
    qty.value--
  }
}
</script>
<template>
  <div class="container">
    <h1>Quản lý giỏ hàng với ref()</h1>
    <p>Số lượng sản phẩm: {{ qty }}</p>
    <button @click="increaseQty" type="button">Tăng</button>
    <button @click="decreaseQty" type="button" :disabled="qty === 0">
      Giảm
    </button>
  </div>
</template>
<style scoped></style>
