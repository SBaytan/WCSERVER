<template>
  <div class="contact">
    <h1>{{title}}</h1>
    <h4>{{msg}}</h4>
    <h4>{{msg2}}</h4>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data(){
    return {
      title: 'Contact',
      msg: 'Fb: https://www.facebook.com/Ren\'s Art',
      msg2: 'Tumblr: RenHirose',
      
    }
  }
}
</script>

<!-- Add "scoped" attributes to limit CSS to this component only -->
<style scoped>

</style>