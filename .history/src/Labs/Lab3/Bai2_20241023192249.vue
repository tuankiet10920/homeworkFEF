<script setup></script>
<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <img :src="product.imageUrl()" class="card-img-top" alt="alienware-g15" />
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
<style scoped></style>
