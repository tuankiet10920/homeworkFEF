<script src></script>
<template>
  <header>
    <nav>
      <ul class="ul-first">
        <li class="li-first">
          Lab1
          <ul>
            <li>
              <RouterLink to="/bai2lab1">Bài 2</RouterLink>
              <RouterLink to="/bai3lab1">Bài 3</RouterLink>
              <RouterLink to="/bai4lab1">Bài 4</RouterLink>
            </li>
          </ul>
        </li>
        <li class="li-first">Lab2</li>
        <li class="li-first">Lab3</li>
        <li class="li-first">Lab4</li>
        <li class="li-first">Lab5</li>
        <li class="li-first">Lab6</li>
        <li class="li-first">Lab7</li>
        <li class="li-first">Lab8</li>
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
}
.li-first {
  padding: 3px 10px;
}
.li-first:first-child {
  padding-left: 0px;
}
.li-first:last-child {
  padding-right: 0px;
}
.ul-first {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
