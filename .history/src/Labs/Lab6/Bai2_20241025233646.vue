<script setup>
import { ref, onBeforeUpdate, onUpdated } from 'vue'
import axios from 'axios'
const posts = ref([])
const loading = ref(false)
const fetchData = async () => {
  loading.value = true
  const response = await axios.get('http://localhost:3000/posts')
  posts.value = response.data
  loading.value = false
}
onBeforeUpdate(() => {
  console.log('Component sẽ cập nhật.')
})
onUpdated(() => {
  console.log('Component đã cập nhật.')
})
</script>
<template>
  <div>
    <button class="btn btn-primary" @click="fetchData">Tải bài viết</button>
    <div v-if="loading">Đang tải dữ liệu...</div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
