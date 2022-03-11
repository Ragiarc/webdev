<template>
<div class="wrapper">
  <div id="greeting">
    <h1>Hello!</h1>
    <p>I'm a junior at BYU getting my Computer Science Degree.</p>
     
  </div>
  
  <div class="hero">
    <router-link to="/mr">Mixed Reality Development</router-link>
    <div>
      <router-link to="/ue4" class = "inline">Unreal Engine</router-link>
      <p class = "inline">&nbsp;&amp;&nbsp;</p>
      <router-link to="/mr" class = "inline">Unity</router-link>
    </div>
    <router-link to="/test">Testing &amp; Verification</router-link>
    <div>
      <router-link to="/aws" class = "inline">AWS</router-link>
      <p class = "inline">&nbsp;&amp;&nbsp;</p>
      <router-link to="/sql" class = "inline">SQL</router-link>
    </div>
    <router-link to="/web">Web Design</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeroView',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-content: center;
  align-items: center;
  color: aliceblue;
  
}

.hero {
  margin-top: 5vh;
  margin-bottom: 5vh;
  box-shadow:
    inset 0 0 50px #fff,      /* inner white */
    inset 20px 0 80px #f0f,   /* inner left magenta short */
    inset -20px 0 80px #0ff,  /* inner right cyan short */
    inset 20px 0 300px #f0f,  /* inner left magenta broad */
    inset -20px 0 300px #0ff, /* inner right cyan broad */
    0 0 50px #fff,            /* outer white */
    -10px 0 80px #f0f,        /* outer left magenta */
    10px 0 80px #0ff;         /* outer right cyan */
  max-width: fit-content;
  height:fit-content;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.hero p {
  margin: 5px;
  font-weight: 800;
  font-size: 3vh;
  color: #C9C5BA;
  text-size-adjust: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.inline {
  display: inline;
}

a {
  font-weight: 800;
  color: #C9C5BA;
  text-decoration: none;
}

a:hover {
  color: #0ff;
}

a.router-link-active {
  color: #42b983;
}

</style>
