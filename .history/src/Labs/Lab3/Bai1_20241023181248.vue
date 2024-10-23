<script setup>
import { reactive } from 'vue'
const product = reactive({
  id: 1,
  name: 'Dell alienware',
  price: 200000000,
  quantity: 1,
  category: 'Điện tử',
  inStock: true,
  description: 'Laptop gaming thời thượng',
  imageUrl: '../../assets/img/alienware-g15.webp',
})
</script>
<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <img
        src="../../assets/img/alienware-g15.webp"
        class="card-img-top"
        alt="alienware-g15"
      />
      <div class="card-body">
        <h5 class="card-title">Sản phẩm A</h5>
        <p class="card-text">Giá 100 VND</p>
        <p class="card-text">Số lượng: 5</p>
        <p class="card-text">Danh mục: Điện tử</p>
        <p class="card-text btn btn-primary">Còn hàng</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-text {
  font-size: 14px;
}
.btn {
  font-size: 8px;
}
</style>
