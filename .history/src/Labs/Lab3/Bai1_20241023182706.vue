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
  imageUrl: import('../../assets/img/alienware-g15.webp'),
})
</script>
<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <img :src="product.imageUrl" class="card-img-top" alt="alienware-g15" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Giá {{ product.price }} VND</p>
        <p class="card-text">Số lượng: {{ product.quantity }}</p>
        <p class="card-text">Danh mục: {{ product.category }}</p>
        <!-- card-text btn btn-danger -->
        <p
          :class="{
            'card-text btn btn-primary': product.inStock,
            'card-text btn btn-danger': !product.inStock,
          }"
        >
          {{ product.inStock ? 'Còn hàng' : 'Hết hàng' }}
        </p>
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
