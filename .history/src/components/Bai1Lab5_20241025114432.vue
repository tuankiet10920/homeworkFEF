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
      <div class="card-title">{{ props.title }}</div>
      <div class="card-subtitle">Tác giả: {{ props.author }}</div>
      <div class="card-text">{{ props.price.toLocaleString() }} VND</div>
      <div
        class="card-text"
        v-html="props.inStock ? 'Còn hàng' : 'Hết hàng'"
      ></div>
    </div>
  </div>
</template>
<style></style>
