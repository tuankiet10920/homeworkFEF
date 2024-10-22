<script src></script>
<template>
  <div class="labs">
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
  </div>
</template>
<style scoped>
.labs {
  width: 100%;
  display: flex;
  justify-content: center;
}
table {
  border-collapse: collapse;
}
th {
  padding: 5px 20px;
}
</style>
