<script setup>
import { ref } from 'vue'
import router from '../router/index.js'

const sourceTrs = ref([
  {
    name_lab: 'Lab1',
    exs: [
      {
        name_ex: 'Bài 2',
        link: '/bai2lab1',
        namePath: 'Bai2',
      },
      {
        name_ex: 'Bài 3',
        link: '/bai3lab1',
        namePath: 'Bai3',
      },
      {
        name_ex: 'Bài 4',
        link: '/bai4lab1',
        namePath: 'Bai4',
      },
      {
        name_ex: 'Bài 5',
        link: '/bai5lab1',
        namePath: 'Bai5',
      },
    ],
  },
  {
    name_lab: 'Lab2',
    exs: [
      {
        name_ex: 'Bài 1',
        link: '/bai1lab2',
        namePath: 'Bai1',
      },
      {
        name_ex: 'Bài 2',
        link: '/bai2lab2',
        namePath: 'Bai2',
      },
      {
        name_ex: 'Bài 3',
        link: '/bai3lab2',
        namePath: 'Bai3',
      },
      {
        name_ex: 'Bài 4',
        link: '/bai4lab2',
        namePath: 'Bai4',
      },
    ],
  },
  {
    name_lab: 'Lab3',
    exs: [
      {
        name_ex: 'Bài 1',
        link: '/bai1lab3',
        namePath: 'Bai1',
      },
      {
        name_ex: 'Bài 2',
        link: '/bai2lab3',
        namePath: 'Bai2',
      },
      {
        name_ex: 'Bài 3',
        link: '/bai3lab3',
        namePath: 'Bai3',
      },
      {
        name_ex: 'Bài 4',
        link: '/bai4lab3',
        namePath: 'Bai4',
      },
      {
        name_ex: 'Bài 5',
        link: '/bai5lab3',
        namePath: 'Bai5',
      },
    ],
  },
  {
    name_lab: 'Lab4',
    exs: [
      {
        name_ex: 'Bài 1',
        link: '/bai1lab4',
        namePath: 'Bai1',
      },
      {
        name_ex: 'Bài 2',
        link: '/bai2lab4',
        namePath: 'Bai2',
      },
      {
        name_ex: 'Bài 3',
        link: '/bai3lab4',
        namePath: 'Bai3',
      },
      {
        name_ex: 'Bài 4',
        link: '/bai4lab4',
        namePath: 'Bai4',
      },
    ],
  },
  {
    name_lab: 'Lab5',
    exs: [
      {
        name_ex: 'Bài 1',
        link: '/bai1lab5',
        namePath: 'Bai1',
      },
      {
        name_ex: 'Bài 2',
        link: '/bai2lab5',
        namePath: 'Bai2',
      },
      {
        name_ex: 'Bài 3',
        link: '/bai3lab5',
        namePath: 'Bai3',
      },
      {
        name_ex: 'Bài 4',
        link: '/bai4lab5',
        namePath: 'Bai4',
      },
    ],
  },
])

sourceTrs.value.forEach(tr => {
  tr.exs.forEach(ex => {
    let pathImport = `../Labs/${tr.name_lab}/${ex.namePath}.vue`
    router.addRoute({
      path: ex.link,
      name: ex.name_ex + ' ' + tr.name_lab,
      component: () => import(pathImport),
    })
  })
})
console.log(router.getRoutes())
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
          <td>{{ item.exs.length }}</td>
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
  width: 50px;
  height: 30px;
  border-radius: 10px;
  border: none;
  background: #454343;
  color: #fff;
  margin-right: 3px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  font-size: 12px;
}
button:hover {
  color: #009011;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
