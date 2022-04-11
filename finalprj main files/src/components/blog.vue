<template>
  <div class="blog">
    <h1>{{title}}</h1>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data(){
    return {
      title: 'Blog',
      msg: 'Hello, I am Ren and this is a collection of the art I was able to finish last year.'
    }
  }
}
</script>

<!-- Add "scoped" attributes to limit CSS to this component only -->
<style scoped>

</style>