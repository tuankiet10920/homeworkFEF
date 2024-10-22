<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: '',
  age: null,
  email: '',
})
</script>
<template>
  <div class="container">
    <h1>Quản lý thông tin người dùng với reactive()</h1>
    <form @submit.prevent="submitForm">
      <label>Tên: <input v-model="user.name" type="text" /></label><br />
      <label>Tuổi: <input v-model="user.age" type="number" /></label><br />
      <label>Email: <input v-model="user.email" type="text" /></label><br />
      <input type="submit" value="Cập nhật" />
    </form>
    <br />
    <hr />
    <br />
    <p>Tên: {{ user.name }}</p>
    <p>Tuổi: {{ user.age }}</p>
    <p>Email: {{ user.email }}</p>
  </div>
</template>
<style scoped></style>
