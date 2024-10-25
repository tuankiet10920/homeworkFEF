<script setup>
import Bai1 from '../../components/Bai1Lab5.vue'
import Bai2 from '../../components/Bai2Lab5.vue'
import { ref } from 'vue'

const books = ref([])
</script>
<template>
  <div class="container">
    <Bai2 />
    <Bai1 v-if="books !== undefined" />
  </div>
</template>
<style scoped></style>
