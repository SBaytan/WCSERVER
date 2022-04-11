<template>
  <div class="about">
    <h1>{{title}}</h1>
    <h4>{{msg}}</h4>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return {
      title: 'About',
      msg: 'Ren is an I.T student in Holy Angel University student trying hard to become a great artist and find her artstyle. Her real name is Shem B.'
    }
  }
}
</script>

<!-- Add "scoped" attributes to limit CSS to this component only -->
<style scoped>

</style>