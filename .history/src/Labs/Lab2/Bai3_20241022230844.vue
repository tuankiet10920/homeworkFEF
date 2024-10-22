<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="container">
    <h1>Thẻ vật lý của bạn</h1>
    <div class="card">
      <h2>Nguyễn Văn A</h2>
      <p>XXXX XXXX XXXX</p>
      <p>Hạn thẻ</p>
      <div class="row">
        <h3>07/24</h3>
        <h3>Vietibank</h3>
      </div>
    </div>
    <form>
      <label>Tên chủ thẻ: <input type="text" /></label>
      <label>Số thẻ: <input type="number" /></label>
      <label>Ngày hết hạn: <input type="date" /></label>
      <label for="bank">Ngân hàng</label>
      <select name="bank" id="bank">
        <option value="">Chọn tên ngân hàng</option>
        <option value="Vietinbank">Vietinbank</option>
        <option value="Sacombank">Sacombank</option>
        <option value="Agribank">Agribank</option>
      </select>
    </form>
  </div>
</template>
<style scoped></style>
