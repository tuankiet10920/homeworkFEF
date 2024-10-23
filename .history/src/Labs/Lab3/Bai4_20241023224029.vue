<script setup>
import { reactive, ref, computed } from 'vue'
import Alienware from '../../assets/img/alienware-g15.webp'
import getSrcImage from '@/assets/help/getSrcImage'
const product = reactive([
  {
    id: 1,
    name: 'Laptop',
    price: 15000000,
    quantity: 5,
    category: 'Electronics',
    inStock: true,
    description: 'Laptop thế hệ mới',
    imageUrl: 'alienware-g15.webp',
  },
  {
    id: 2,
    name: 'Phone',
    price: 8000000,
    quantity: 12,
    category: 'Electronics',
    inStock: true,
    description: 'Điện thoại thông minh',
    imageUrl: 'alienware-m15.webp',
  },
  {
    id: 3,
    name: 'Headphone',
    price: 2000000,
    quantity: 0,
    category: 'Accessories',
    inStock: false,
    description: 'Tai nghe chất lượng cao',
    imageUrl: 'alienware-r2.avif',
  },
])

const selectedCategory = ref('Electronics')

const filterProductList = computed(() => {
  if (!selectedCategory.value) {
    return product
  }
  return product.filter(item => item.category === selectedCategory.value)
})
</script>
<template>
  <div class="container">
    <select
      class="form-select"
      v-model="selectedCategory"
      aria-label="Default select example"
    >
      <option value="">Open this select menu</option>
      <option value="Electronics">Electronics</option>
      <option value="Accessories">Accessories</option>
    </select>
    <p class="text-success btn btn-info" style="width: 100%">
      Tổng giá trị hàng tồn kho: 1 VND
    </p>
    <div class="row">
      <div class="col" v-for="item in filterProductList">
        <div class="card" style="width: 18rem">
          <img
            :src="getSrcImage(item.imageUrl)"
            class="card-img-top"
            alt="alienware-g15"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }} - {{ item.category }}</h5>
            <p class="card-text">Giá {{ item.price.toLocaleString() }} VND</p>
            <p class="card-text">Số lượng: {{ item.quantity }}</p>
            <p class="card-text">Mô tả: {{ item.description }}</p>
            <p
              :class="{
                'text-danger': !item.inStock,
                'text-success': item.inStock,
              }"
              v-html="item.inStock ? 'Còn hàng' : 'Hết hàng'"
            ></p>
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
