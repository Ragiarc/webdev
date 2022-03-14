<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>Neural Chickens</h1>
    <p>&emsp;&emsp;My first foray into artificial intelligence, this prototype simulates behavioral evolution in simple organisms. 
        3d-rendered chickens are provided a simple neural network that determines their actions. 
        Newly hatched chickens inherit the neural network of their mother and have a random chance to apply one of several mutations to their neural network. 
        Input nodes represent the chickens' senses, and output nodes determine the behavior of the chicken at any one time.
    <br>
    &emsp;&emsp;While the prototype <em>works</em> it isn't very <em>effective</em>. My pride in this project comes from its configurability. 
    The user can change the terrain size, number of starting chickens, and amount of foliage; all at runtime.<br>
    </p>

    </div>
    <div class = "right">
        <img src = "/assets/Cogger1.PNG" class = "panelImg">
        <img src = "/assets/Cogger2.PNG" class = "panelImg">
    </div>
    </main>
    <p id="tags">Tags: Artificial Intelligence, Unreal Engine</p>
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