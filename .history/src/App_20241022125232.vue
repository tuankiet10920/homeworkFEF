<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/labs">Labs</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.wrapper nav a {
  margin-right: 20px;
}
nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
}
</style>
