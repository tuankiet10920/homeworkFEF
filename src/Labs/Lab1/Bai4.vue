<script setup>
import { ref } from "vue";
// http://localhost:5173/src/assets/img/
const protocol = "http"
const hostName = "localhost"
const port = 5173
const pathToImage = "/src/assets/img/"

const __DIR__ = protocol + "://" + hostName + ":" + port + pathToImage

const sanpham = ref([
    {
        name: "Sản phẩm 1",
        desciption: "Mô tả sản phẩm 1, rất chất lượng và đáng mua",
        image: __DIR__ + "alienware-r2.avif",
        price: 500000,
        alt: "alienware-r2"
    },
    {
        name: "Sản phẩm 2",
        desciption: "Mô tả sản phẩm 2, chất lượng tốt và giá phải chăng",
        image: __DIR__ + "alienware-g15.webp",
        price: 300000,
        alt: "alienware-g15"
    },
    {
        name: "Sản phẩm 3",
        desciption: "Mô tả sản phẩm 3, sản phẩm cao cấp và nhiều tính năng",
        image: __DIR__ + "alienware-m15.webp",
        price: 1000000,
        alt: "alienware-m15"
    },
]);
</script>
<template>
    
    <div class="container">
        <div class="row">
            <div class="col" v-for="item in sanpham">
                <div class="card" style="width: 100%">
                    <img :src="item.image" class="card-img-top" :alt="item.alt" />
                    <div class="card-body">
                        <h5 class="card-title">{{ item.name }}</h5>  <!-- interpolation -->
                        <p class="card-text">{{ item.desciption }}</p>
                        <p class="card-text">Giá {{ item.price }} VND</p>
                        <a href="#" class="btn btn-success">Mua ngay</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
h1 {
    color: red;
}

.card-body {
    padding: 20px;
}
.card-img-top{
    height: 200px;
}
</style>
