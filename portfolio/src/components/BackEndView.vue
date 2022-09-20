<template>
  <div id="wrapper">
    <div class="description">
      <h1>Backend</h1>
    </div>
    <div id="views">
      <AzureView/>
      <AWSView />
    </div>
  </div>
</template>

<script>
import AzureView from "@/components/AzureView.vue";
import AWSView from "@/components/AWSView.vue";

export default {
  name: "BackEndView",
  components: {
    AzureView,
    AWSView
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
  background-color: #69936c;
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