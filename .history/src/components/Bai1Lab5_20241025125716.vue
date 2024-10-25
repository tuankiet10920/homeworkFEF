<script setup>
import { defineProps, onMounted } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  author: String,
  price: Number,
  category: String,
})

onMounted(() => {
    console.log(props);

}),
</script>
<template>
  <div class="container">
    <div class="card">
      <div class="card-title">{{ props.title }}</div>
      <div class="card-subtitle">Tác giả: {{ props.author }}</div>
      <div class="card-text">{{ props.price.toLocaleString() }} VND</div>
      <div class="card-text" v-html="props.category"></div>
    </div>
  </div>
</template>
<style></style>
