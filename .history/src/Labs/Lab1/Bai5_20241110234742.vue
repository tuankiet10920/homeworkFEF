<script setup></script>
<template>
  <header class="border-bottom">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Logo</a>
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
                <a class="nav-link" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
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
            <div
              class="auth d-flex align-items-center ms-2"
              style="height: 100%"
            >
              <button class="btn btn-primary text-white mb-0">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="products">
    <div class="container">
      <div class="container text-center">
        <div class="row">
          <div
            class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xs-3 mb-4 text-center"
            style="transition: all 0.3s ease-in-out"
            v-for="n in 5"
          >
            <img src="..." class="img-fluid" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p>Jean 1</p>
              <p>250.000 VND</p>
              <a href="#" class="btn btn-primary">Buy now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 576px) {
  .container,
  .container-sm {
    max-width: 100%;
  }
}
</style>
