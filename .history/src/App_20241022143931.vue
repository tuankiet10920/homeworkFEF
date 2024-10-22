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
  margin-bottom: 20px;
  color: #003807;
}
nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid red;
  background: #000;
}
</style>
