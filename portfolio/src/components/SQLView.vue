<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>SQL</h1>
    <p>&emsp;&emsp;For my CS240 class I developed a Family Map android application that presents data from an SQL database in a fun way. 
        Users input data (events) about their relatives into the database, and then the application maps those events at the location they happened on a world map. 
        Colored ines connecting events visualize how the events are related to each other, whether spousal, chronological, parent-child, etc.  <br>
    &emsp;&emsp;In building cogger I developed my own gear generation system - an in-editor tool for specifying the number and types of gears to be connected to each other. When given an initial rotation speed and direction, the gears will
    all rotate in sync together as expected. <br>
    &emsp;&emsp;The creators of the playable case study are very happy with Cogger, and the actors didn't have to try hard to look motion sick.
    </p>

    </div>
    <div class = "right">
        <img src="../assets/sql.jpg" class = "panelImg"/>
    </div>
    </main>
    <p id="tags">Tags: Mixed Reality Development, Unity</p>
</div>

</template>

<script>
// import cogger1 from "../assets/Cogger1.PNG"

export default {
  name: 'SqlView',
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
  background-color: #CD8B76;
}

main {
    margin: 10px;
    margin-left: 35px;
    display: flex;
    flex:.9
}

.left {
    align-self: flex-start;
    font-size: 1.25em;
    line-height: 1.75;
    text-align: left;
    flex:1
 
}

.right {
    display: flex;
    flex-direction: column;
    flex:1;
    align-self: center;
}

.panelImg {
    margin:20px;
    max-width: 20vw;
    height: auto;
    align-self: center;
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
