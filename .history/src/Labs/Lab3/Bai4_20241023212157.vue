<script setup>
import { reactive } from 'vue'
import Alienware from '../../assets/img/alienware-g15.webp'
const product = reactive({
  id: 1,
  name: 'Dell alienware',
  price: 200000000,
  quantity: 1,
  category: 'Điện tử',
  inStock: true,
  description: 'Laptop gaming thời thượng',
  imageUrl: () => {
    const __DASH = 'http://localhost:5173/src/assets/img/'
    return __DASH + 'alienware-g15.webp'
  },
})
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card" style="width: 18rem">
          <img
            :src="product.imageUrl()"
            class="card-img-top"
            alt="alienware-g15"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              Giá {{ product.price.toLocaleString() }} VND
            </p>
            <p class="card-text">Số lượng: {{ product.quantity }}</p>
            <p class="card-text">Danh mục: {{ product.category }}</p>
            <p v-if="product.quantity > 10" class="text-success">
              Số lượng lớn
            </p>
            <p v-else-if="product.quantity > 0" class="text-warning">
              Số lượng vừa phải
            </p>
            <p v-else class="text-danger">Hết hàng</p>
          </div>
        </div>
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
