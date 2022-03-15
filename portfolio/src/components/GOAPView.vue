<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h2>GOAP Traders</h2>
    <p>&emsp;&emsp;Simulating human decision making is a bit of an obsession of mine, and the GOAP Traders project is my most robust attempt yet. 
        Currently, each agent uses a Goal Oriented Action Planning approach to determine their behavior. 
        Given different action types, the AIs will formulate the appropriate (and cost efficient) actions to reach any goal.   
        While not yet implemented, my goal for the project is for the agents to independently decide that to structure their individual lives most efficiently, 
        they should specialize according to their skills and engage in trade.<br>
    &emsp;&emsp;The project thus far demonstrates skilled use of graph theory, data structures, recursion, and abstraction. While the agents don't yet engage in trade, they are capable of
    efficiently problem solving multi-step tasks and resolving bootstrapping/chicken&amp;egg type problems.<br>
    </p>

    </div>
    <div class = "right">
        <img src = "../assets/goap.png" class = "panelImg">
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