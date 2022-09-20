<template>
  <div id="wrapper">
    <div class="description">
      <h1>Unreal Engine</h1>
      <p>
        Unreal Engine is my goto playground to try out new concepts. I love to develop because I love <em>runtime</em> and <em>simulation</em>. Having things adapt and change as they are used thrills me, and Unreal gives me the tools I need to do that in any virtual medium.
        <br>I spend nearly all my free-time prototyping something or exploring a new concept in Unreal. Below is a horribly incomplete list of projects I've worked on. 
      </p>
    </div>
    <div id="views">
      <UberWaldView />
      <GOAPView />
      <NeuralChickensView />
    </div>
  </div>
</template>

<script>
import UberWaldView from "@/components/UberWaldView.vue";
import GOAPView from "@/components/GOAPView.vue";
import NeuralChickensView from "@/components/NeuralChickensView.vue";

export default {
  name: "UnrealView",
  components: {
    UberWaldView,
    GOAPView,
    NeuralChickensView,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.description {
  color: aliceblue;
  background-color: #69936c;
}

.description h1 {
  margin-top: 5vh;
  background-color: #69936c;
}

.description p {
  font-size: 18px;
  line-height: 1.75;
  text-align: left;
  margin: 5vw;
  margin-top: 1vh;
}

#wrapper {
  background-color: #805e73;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
}

a {
  color: #0ff;
}

#views {
  background-color: #805e73;
}
</style>