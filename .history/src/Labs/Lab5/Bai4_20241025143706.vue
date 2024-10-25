<script setup>
import Bai3Component from '../../components/Bai3Lab5.vue'
import Bai4Component from '../../components/Bai4Lab5.vue'
</script>
<template>
  <div class="container">
    <Bai4Component>
      <template #default="{ theme }">
        <h2 :class="theme">Chủ đề hiện tại: {{ theme }}</h2>
        <Bai3Component>
          <h5 class="card-title">Tiêu đề sách</h5>
          <h6 class="card-subtitle mb-2 text-muted">Tác giả: Tác giả A</h6>
          <p class="card-text">Giá: 150000 VND</p>
          <p class="card-text">Thể loại: Fiction</p>
        </Bai3Component>
      </template>
    </Bai4Component>
  </div>
</template>
<style scoped></style>
