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
  color: #009011;
  text-decoration: none;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  padding: 20px;
  border-radius: 10px;
  background: #000;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
