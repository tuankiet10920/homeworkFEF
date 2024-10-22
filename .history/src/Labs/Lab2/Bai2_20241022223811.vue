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
    <form>
      <label>Tên: <input /></label><br />
      <label>Tuổi: <input type="number" /></label><br />
      <label>Email: <input /></label><br />
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
