<script setup>
import { reactive, onMounted } from 'vue'

const informationBanking = reactive({
  name: '',
  cardNumber: '',
  expiryDate: '',
  bank: '',
})

// onMounted(() => {
//     if(informationBanking.name === ''){
//         informationBanking
//     }
// }),
</script>
<template>
  <div class="container">
    <h1>
      {{
        informationBanking.name === ''
          ? 'Nguyễn Văn A'
          : informationBanking.name
      }}
    </h1>
    <div class="card">
      <h2>Nguyễn Văn A</h2>
      <p>XXXX XXXX XXXX</p>
      <p>Hạn thẻ</p>
      <div class="row">
        <h3>07/24</h3>
        <h3>Vietibank</h3>
      </div>
    </div>
    <form>
      <label
        >Tên chủ thẻ:
        <input v-model="informationBanking.name" type="text" /></label
      ><br />
      <label
        >Số thẻ:
        <input v-model="informationBanking.cardNumber" type="number" /></label
      ><br />
      <label
        >Ngày hết hạn:
        <input v-model="informationBanking.expiryDate" type="date" /></label
      ><br />
      <label for="bank">Ngân hàng</label>
      <select name="bank" id="bank" v-model="informationBanking.bank">
        <option value="">Chọn tên ngân hàng</option>
        <option value="Vietinbank">Vietinbank</option>
        <option value="Sacombank">Sacombank</option>
        <option value="Agribank">Agribank</option></select
      ><br />
    </form>
  </div>
</template>
<style scoped></style>
