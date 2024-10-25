<script setup>
import { provide, ref } from 'vue'
const theme = ref('dark-theme')
provide('theme', theme)
</script>
<template>
  <div :class="theme">
    <slot :theme="theme"></slot>
  </div>
</template>
