<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>Cogger</h1>
    <p>&emsp;&emsp;I had a lot of fun building Cogger. As lab assistant for the Mixed Reality Lab at BYU, I was asked to create a professional looking VR application that would make users motion sick.
    Video of actors getting nauseated playing Cogger is currently being used as part of a playable case study in BYU classes. The application has a single, short level where players are expected to platform their way across a system of rotating gears to fix the large steam-punk machine they find themselves
    inside of. Cogger uses standard VR locomotion controls and was developed in the Unity game engine.<br>
    &emsp;&emsp;In building cogger I developed my own gear generation system - an in-editor tool for specyfying the number and types of gears to be connected to each other. When given an initial rotation speed and direction, the gears will
    all rotate in sync together as expected. <br>
    &emsp;&emsp;The creators of the playable case study are very happy with Cogger, and the actors didn't have to try hard to look motion sick.
    </p>

    </div>
    <div class = "right">
        <img src="../assets/cogger1.png" class = "panelImg"/>
        <img src="../assets/cogger2.png" class = "panelImg"/>
    </div>
    </main>
    <p id="tags">Tags: Mixed Reality Development, Unity</p>
</div>

</template>

<script>
// import cogger1 from "../assets/Cogger1.PNG"

export default {
  name: 'CoggerView',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  color: aliceblue;
}

main {
    margin: 10px;
    margin-left: 35px;
    display: flex;
    flex:.9
}

.left {
    align-self: flex-start;
    font-size: 18px;
    line-height: 1.75;
    text-align: left;
    flex:1
 
}

.right {
    display: flex;
    flex-direction: column;
    flex:1
}

.panelImg {
    margin:20px;
    max-width: 40vw;
    height: auto;
}

#tags {
    /* color: grey; */
    opacity: 75%;
    font-weight: 500;
    flex:.1;
    align-self: flex-start;
    margin-left: 35px;
}

a {
  font-weight: 800;
  color: #C9C5BA;
  text-decoration: none;
}

a:hover {
  color: #0ff;
}

@media only screen and (max-width: 450px) {
  main {
    display: flex;
    flex-direction: column;
  }

  .panelImg {
    margin:20px;
    max-width: 80vw;
    height: auto;
}
}





</style>
