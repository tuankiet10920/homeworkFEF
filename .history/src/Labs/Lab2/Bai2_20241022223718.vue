<script setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'Kiệt',
  age: 25,
  email: 'kiet@gmail.com',
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
    <p>Tên: kiệt</p>
    <p>Tuổi: kiệt</p>
    <p>Email: kiệt</p>
  </div>
</template>
<style scoped></style>
