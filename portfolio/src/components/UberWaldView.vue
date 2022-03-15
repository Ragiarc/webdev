<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h2>UberWald</h2>
    <p>&emsp;&emsp;UberWald is my current side project. Currently, it's a 5 minute playable demo of a resource management focused mmo. Developing UberWald involves many of the skills I've gained as a developer.
      <br>&emsp;&emsp;UberWald has a persistent multiplayer world where players schedule tasks that change the world in real time. While not yet implemented, tracking changes to the world will require elegant database management. Maintaining the database in real time  
    The players' most valuable resource are NPCs who can be assigned tasks. How and whether the NPC completes the task is determined using a Goal Oriented Action Planning approach, fulfilling my itch to involve AI into the project. 
    In every aspect of UberWald I strive to keep the code as clean and maintainable as possible, allowing me to practice different design patterns in tandem.
    </p>

    </div>
    <div class = "right">
        <img src = "../assets/uberwald.png" class = "panelImg">
    </div>
    </main>
    <p id="tags">Tags: Unreal Engine</p>
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
    flex:.9;
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
    flex:1;
    align-self: center;
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