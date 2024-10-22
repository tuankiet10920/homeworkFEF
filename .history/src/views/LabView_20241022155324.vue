<script src></script>
<template>
  <header>
    <nav>
      <ul>
        <li>
          Lab1
          <ul>
            <li>
              <RouterLink to="/bai2lab1">Bài 2</RouterLink>
              <RouterLink to="/bai3lab1">Bài 3</RouterLink>
              <RouterLink to="/bai4lab1">Bài 4</RouterLink>
            </li>
          </ul>
        </li>
        <li>Lab2</li>
        <li>Lab3</li>
        <li>Lab4</li>
        <li>Lab5</li>
        <li>Lab6</li>
        <li>Lab7</li>
        <li>Lab8</li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: center;
}
nav {
  width: 80%;
  border: 1px solid red;
}
li {
  list-style: none;
  padding: 3px 10px;
}
li:first-child {
  padding-left: 0px;
}
ul {
  display: flex;
}
</style>
