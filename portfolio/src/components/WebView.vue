<template>
<div class="wrapper">
    <main>
    <div class = "left">
    <h1>Web Development</h1>
    <p>Like what you see?<br>
    &emsp;&emsp;This website runs on a server I'm renting using Nginx and the Vue CLI toolchain. Keeping an updated portfolio website can be a chore, so I decided to use Vue components to make adding additional projects or even new categories easy and efficient.
    Take a look at my <a href = "https://github.com/Ragiarc/webdev.git">git repo</a>.<br>
    &emsp;&emsp;I was also the lead developer for <a href ="https://www.mathisfigureoutable.com" target="_blank">mathisfigureoutable.com</a> and most everything you'll see there was designed by me (as of 3/10/2022).
    </p>

    </div>
    <div class = "right">
        <img src="../assets/mathHome.jpg" class = "panelImg"/>
    </div>
    </main>
    <p id="tags">Front End</p>
</div>

</template>

<script>
// import cogger1 from "../assets/Cogger1.PNG"

export default {
  name: 'WebView',
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
  background-color: #69936c;
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
  color: #46c2f3;
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
