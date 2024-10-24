<script setup></script>
<template>
  <div class="container">
    <form>
      <h2>Thêm danh sách mới vào thư viện</h2>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label"
          >Example label</label
        >
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
        />
      </div>
      <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label"
          >Example label</label
        >
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
        />
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button type="button" class="btn btn-info">Thêm sách</button>
      </div>
    </form>
    <br />
    <hr />
    <br />
    <h1>Danh sách</h1>
    <div class="card">
      <p class="fs-4">.fs-4 text</p>
      <p class="fs-5">.fs-5 text</p>
      <p class="fs-5">.fs-5 text</p>
    </div>
  </div>
</template>
<style scoped></style>
