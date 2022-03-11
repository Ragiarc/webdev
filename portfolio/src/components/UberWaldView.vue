<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>UberWald</h1>
    <p>&emsp;&emsp;I had a lot of fun building Cogger. As lab assistant for the Mixed Reality Lab at BYU, I was asked to create a VR application that would give users motion sickness.
    Video of actors getting nauseated playing Cogger is currently being used as part of a playable case study in BYU classes. The application has a single, short level where players are expected to platform their way across a system of rotating gears to fix the large steam-punk machine they find themselves
    inside of. Cogger uses standard VR locomotion controls and was developed in the Unity game engine.<br>
    &emsp;&emsp;In building cogger I developed my own gear generation system - an in-editor tool for specyfying the  number and types of gears to be connected to each other. When given an initial rotation speed and direction, the gears will
    all rotate in sync together as expected. <br>
    &emsp;&emsp;The creators of the playable case study were very happy with Cogger, and the actors didn't have to do very much acting to get motion sick.
    </p>

    </div>
    <div class = "right">
        <img src = "/assets/Cogger1.PNG" class = "panelImg">
        <img src = "/assets/Cogger2.PNG" class = "panelImg">
    </div>
    </main>
    <p id="tags">Tags: Mixed Reality Development, Unity</p>
</div>

</template>

<script>
// import cogger1 from "../assets/Cogger1.PNG"

export default {
  name: 'UberWaldView',
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
    min-width: 30vw;
}

#tags {
    /* color: grey; */
    opacity: 75%;
    font-weight: 500;
    flex:.1
}

a {
  font-weight: 800;
  color: #C9C5BA;
  text-decoration: none;
}

a:hover {
  color: #0ff;
}





</style>