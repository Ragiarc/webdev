<template>
  <div id="wrapper">
    <div class="description">
      <h1>Mixed Reality Development</h1>
      <p>
        VR, AR, MR, XR, whatever Rs you like, I am fascinated with the genre.
        Since May of 2021 I have worked as a lab assistant for the
        <a href="https://mrlab.byu.edu">Mixed Reality Lab</a> at BYU. Since
        August of 2021, I have also been the BYU Mixed Reality Club president.
        In these positions I have consulted numerous professors and students who
        are interested in employing mixed reality applications into their
        research. From film students looking to use 'virtual cameras' like those
        used in the Mandalorian, to a finance group trying to create a system
        for advertising in VR, I've consulted for around a dozen different
        projects at BYU. The lab itself always has a project or two in the
        works. The projects listed below are ones where I was the sole
        developer.
      </p>
    </div>
    <div id="views">
      <CoggerView />
    </div>
  </div>
</template>

<script>
import CoggerView from "@/components/CoggerView.vue";

export default {
  name: "MRView",
  components: {
    CoggerView,
  },
};
</script>



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
  margin: 2vw;
  margin-top: 1vh;
}

#wrapper {
  background-color: #420c14;
  display: flex;
  flex-direction: column;
}

a {
  color: #0ff;
}
</style>
