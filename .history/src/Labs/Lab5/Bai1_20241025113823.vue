<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  author: String,
  price: Number,
  inStock: Boolean,
})
</script>
<template>
  <div class="container">
    <div class="card">
      <div class="card-title">Sách 1</div>
      <div class="card-subtitle">Tác giả: NNN</div>
      <div class="card-text">10000 VND</div>
      <div class="card-text">Còn hàng</div>
    </div>
  </div>
</template>
<style></style>
