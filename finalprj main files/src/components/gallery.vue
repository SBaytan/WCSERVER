<template>
  <div class="gallery">
    <h1>{{title}}</h1>
    <h4>{{msg}}</h4>

    <div class="polaroid">
        <img src="@/assets/First_digi_art.jpg" id="image">
      <div class="container">
        <p> <strong>Hunt</strong> </p>
      </div>
    </div>

      <div class="polaroid">
        <img src="@/assets/pirate_art.jpg" id="image">
      <div class="container">
        <p> <strong>Chance Meeting</strong> </p>
      </div>
    </div>

    <div class="polaroid">
        <img src="@/assets/queen.jpg" id="image">
      <div class="container">
        <p> <strong>Queen</strong> </p>
      </div>
    </div>

    <div class="polaroid">
        <img src="@/assets/gil_and_eli.jpg" id="image">
      <div class="container">
        <p> <strong>Childhood Differences</strong> </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'gallery',
  data(){
    return {
      title: 'Gallery',
      msg: 'My Art'
    }
  }
}
</script>

<!-- Add "scoped" attributes to limit CSS to this component only -->
<style scoped>
div.polaroid {
  width: 14.7%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  margin-left: 2%;
  float: left;
  text-align: center;
}

div.container {
  text-align: center;
  padding: 10px 20px;
}

#image{
  width: 100%;
  height: 150%;
  object-fit: contain;
}
</style>