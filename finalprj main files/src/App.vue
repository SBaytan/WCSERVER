<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="user-select: auto;">
  <div class="container-fluid" style="user-select: auto;">
    <a class="navbar-brand" href="#" style="user-select: auto;">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation" style="user-select: auto;">
      <span class="navbar-toggler-icon" style="user-select: auto;"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor02" style="user-select: auto;">
      <ul class="navbar-nav me-auto" style="user-select: auto;">
        <li class="nav-item" style="user-select: auto;">
          <router-link class="nav-link" to="/">Home
            <span class="visually-hidden" style="user-select: auto;">(current)</span>
          </router-link>
        </li>
        <li class="nav-item" style="user-select: auto;">
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item" style="user-select: auto;">
          <router-link class="nav-link" to="/gallery">Gallery</router-link>
        </li>
        <li class="nav-item" style="user-select: auto;">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
          <li class="nav-item" style="user-select: auto;">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


