<script setup>
import { ref } from 'vue'
const sourceTrs = ref([
  {
    name_lab: 'Lab 1',
    qty: 3,
    exs: [
      {
        name_ex: 'Bài 2',
        link: '/bai2lab1',
      },
      {
        name_ex: 'Bài 3',
        link: '/bai3lab1',
      },
      {
        name_ex: 'Bài 4',
        link: '/bai4lab1',
      },
    ],
  },
])
</script>
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
        <tr v-for="(item, index) in sourceTrs">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name_lab }}</td>
          <td>{{ item.qty }}</td>
          <td>
            <RouterLink v-for="route in item.exs" :to="route.link">
              <button type="button">{{ route.name_ex }}</button>
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
  width: 80%;
}
th,
td {
  padding: 5px 0px;
  text-align: left;
  text-align: center;
}
th {
  background: #454343;
  color: #fff;
}
</style>
