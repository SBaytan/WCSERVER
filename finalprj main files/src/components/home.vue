<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      msg: 'Welcome to your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attributes to limit CSS to this component only -->
<style scoped>

</style>