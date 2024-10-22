<script src></script>
<template>
  <header>
    <nav>
      <ul class="ul-first">
        <li class="li-first">
          Lab1
          <ul class="ul-second">
            <li class="li-second">
              <RouterLink to="/bai2lab1">Bài 2</RouterLink>
            </li>
            <li class="li-second">
              <RouterLink to="/bai3lab1">Bài 3</RouterLink>
            </li>
            <li class="li-second">
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
  <table>
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên lab</th>
        <th>Số lượng</th>
        <th>Các bài</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Lab 1</td>
        <td>3</td>
        <td>
          <RouterLink to="/bai2lab1">
            <button type="button">Bài 2</button>
          </RouterLink>
          <RouterLink to="/bai3lab1">
            <button type="button">Bài 3</button>
          </RouterLink>
          <RouterLink to="/bai4lab1">
            <button type="button">Bài 4</button>
          </RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
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
  padding-left: 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
