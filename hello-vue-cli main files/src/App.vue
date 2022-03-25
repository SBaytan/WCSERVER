<template>
<!--
  NAME: Baytan Shem Ardelee Pioleen M.
  SECTION: WD-201
  -->
  <div id="app">
    <div class="container">
      <img class="image" src="./assets/image.png">
      <h1>{{ msg }}</h1>
      <profile></profile>
      <edu></edu>
      <skills></skills>
    </div>
    
  </div>
</template>

<script>
import profile from './components/Profile.vue';
import skills from './components/Skills.vue';
import edu from './components/Education.vue';
export default {
  name: 'app',
  components: {
    profile,
    edu,
    skills
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #ffffff;
  background: #062C30;
}

.container#pro_con{
  background: #05595B;
  font-size: 18px;
  width: 50%;
}

.container#skills_con{
  background: #05595B;
  font-size: 20px;
  width: 50%;
}

.container#edu_con{
  background: #05595B;
  font-size: 20px;
  width: 50%;
}

.ratio {
    width: 100%;
    height: 6px;
    position: relative;
    background: #EEEEEE;
    display: block;
}

.title{
  color: #E2D784;
}
.image{
  width: 200px;
  margin: auto;
  
}
</style>
