<script setup>
import getSrcImage from '@/assets/help/getSrcImage'
import { reactive } from 'vue'

const products = reactive([
  {
    id: 1,
    name: 'Laptop',
    price: 15000000,
    quantity: 5,
    category: 'Electronics',
    inStock: true,
    image: 'alienware-g15.webp',
  },
  {
    id: 2,
    name: 'Phone',
    price: 8000000,
    quantity: 12,
    category: 'Electronics',
    inStock: true,
    image: 'alienware-m15.webp',
  },
  {
    id: 3,
    name: 'Headphone',
    price: 2000000,
    quantity: 0,
    category: 'Accessories',
    inStock: false,
    image: 'alienware-r2.avif',
  },
])
</script>
<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Ảnh</th>
          <th scope="col">Tên</th>
          <th scope="col">Giá</th>
          <th scope="col">Tình trạng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <img
              :src="getSrcImage(item.image)"
              class="card-img-top"
              alt="..."
            />
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.price.toLocaleString() }} VND</td>
          <td>
            <p class="btn btn-success" style="font-size: 10px">Còn hàng</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.card-img-top {
  width: 70px;
}
</style>
