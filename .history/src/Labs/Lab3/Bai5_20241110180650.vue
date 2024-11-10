<script setup>
import { reactive, ref } from 'vue'

const authSuccess = ref(false)

const informationAuth = {
  username: 'nguyenvana',
  password: 'vananguyen0123',
}

const userForm = reactive({
  username: '',
  password: '',
})

const login = () => {
  if (userForm.username && userForm.password) {
    if (
      userForm.username === informationAuth.username &&
      userForm.password === informationAuth.password
    ) {
      alert('Login successful!')
    } else {
      alert('Login failed! Please check your username and password.')
    }
  } else {
    alert('Please fill into blank')
  }
}
</script>
<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="auth d-flex align-items-center ms-2" style="height: 100%">
            <button class="btn btn-primary text-white mb-0" v-if="authSuccess">
              Login
            </button>
            <div class="auth-success d-flex align-items-center d-none" v-else>
              <p class="text-warning mb-0">Name user</p>
              <button type="button" class="btn btn-danger">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <form class="mt-3" @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="userForm.username"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your information with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputPassword1"
          v-model="userForm.password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>
<style scoped></style>
