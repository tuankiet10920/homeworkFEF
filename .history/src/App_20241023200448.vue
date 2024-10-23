<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GetSrcImage from './assets/help/getSrcImage.js'
import Icon from './components/Icon.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          <Icon iconName="home" />
        </RouterLink>

        <RouterLink to="/about">
          <Icon iconName="settings_accessibility" />
        </RouterLink>

        <RouterLink to="/labs">
          <Icon iconName="dataset" />
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.wrapper nav a {
  margin-bottom: 20px;
  width: fit-content;
  text-decoration: none;
}
.wrapper nav a span {
  color: #009011;
}
.wrapper nav a:last-child {
  margin-bottom: 0;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  padding: 20px;
  border-radius: 10px;
  background: #000;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>
