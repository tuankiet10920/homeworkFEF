<script setup>
import { ref } from 'vue'
const sourceTrs = ref([
  {
    name_lab: 'Lab 1',
    qty: 3,
    exs: [
      {
        name_ex: '2',
        link: '/bai2lab1',
      },
      {
        name_ex: '3',
        link: '/bai3lab1',
      },
      {
        name_ex: '4',
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
th {
  width: calc(100% / 4);
  padding: 10px 0px;
  background: #454343;
  color: #fff;
  text-align: center;
}
td {
  padding: 15px 0px;
  text-align: center;
}
button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background: #454343;
  color: #fff;
  margin-right: 3px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}
button:hover {
  color: #009011;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
